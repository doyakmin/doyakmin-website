"use client"

import { useEffect, useRef } from "react"

declare global {
    interface Window {
        naver: naver.maps.Map
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

            const location = new naver.maps.LatLng(35.087969, 128.902000)

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
                    <div style="padding:12px 16px; min-width: 220px; font-size: 14px; line-height: 1.6; color: #333;">
                      <div style="font-weight: 600; font-size: 15px; margin-bottom: 4px;">
                        주식회사 도약민
                      </div>
                      <div style="margin-bottom: 12px;">
                        부산광역시 강서구 명지오션시티9로 50
                      </div>
                      <div style="text-align: center;"> <!-- 중앙 정렬 핵심 -->
                        <a
                          href="https://map.naver.com/p/search/명지오션시티9로%2050"
                          target="_blank"
                          style="
                            display: inline-block;
                            padding: 6px 12px;
                            background-color: #03c75a;
                            color: white;
                            border-radius: 4px;
                            font-weight: 500;
                            text-decoration: none;
                          "
                        >
                          네이버 지도에서 보기
                        </a>
                      </div>
                    </div>
                  `,
            })

            naver.maps.Event.addListener(marker, "click", () => {
                infoWindow.open(map, marker)
            })
            infoWindow.open(map, marker)
        }

        document.head.appendChild(script)
    }, [clientId])

    return (
        <div
            ref={mapElement}
            style={{ width: "100%", height: "500px" }}
        />
    )
}