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
        script.src =
            `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`
        script.async = true
        script.onload = () => {
            if (!window.naver || !mapElement.current) return

            const mapOptions = {
                center: new window.naver.maps.LatLng(35.087969, 128.902312),
                zoom: 10,
            }

            new window.naver.maps.Map(mapElement.current, mapOptions)
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