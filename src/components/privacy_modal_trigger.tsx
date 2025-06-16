'use client'

import { useState } from 'react'
import PrivacyModal from "@/components/privacy_modal";
import { createPortal } from 'react-dom'

export default function PrivacyModalTrigger() {
    const [showPrivacyModal, setShowPrivacyModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setShowPrivacyModal(true)}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
                개인정보처리방침
            </button>

            {showPrivacyModal && createPortal(
                <PrivacyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />,
                document.body
            )}
        </>
    )
}