"use client"

import { useEffect, useRef } from "react"

declare global {
    interface Window {
        naver: any
    }
}

export default function Map() {
    const mapElement = useRef<HTMLDivElement | null>(null)
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID

    useEffect(() => {
        const script = document.createElement("script")
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`
        script.async = true
        script.onload = () => {
            if (!window.naver || !mapElement.current) return

            const { naver } = window

            const location = new naver.maps.LatLng(35.087969, 128.902312)

            const map = new naver.maps.Map(mapElement.current, {
                center: location,
                zoom: 16,
            })

            const marker = new naver.maps.Marker({
                position: location,
                map,
                title: "명지오션시티9로 50",
            })

            const infoWindow = new naver.maps.InfoWindow({
                content: `
          <div style="padding:10px;line-height:1.5;">
            <b>명지오션시티9로 50</b><br/>
            부산광역시 강서구 명지오션시티9로 50<br/>
            <a href="https://map.naver.com/p/search/명지오션시티9로%2050" target="_blank" style="color:blue;">
              네이버 지도에서 보기
            </a>
          </div>
        `,
            })

            // 마커 클릭 시 정보창 토글
            naver.maps.Event.addListener(marker, "click", () => {
                infoWindow.open(map, marker)
            })

            // 처음부터 정보창 열기
            infoWindow.open(map, marker)
        }

        document.head.appendChild(script)
    }, [])

    return (
        <div
            ref={mapElement}
            style={{ width: "100%", height: "400px" }}
        />
    )
}