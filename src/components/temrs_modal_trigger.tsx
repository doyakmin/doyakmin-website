'use client'

import { useState } from 'react'
import TermsModal from "@/components/terms_modal";
import {createPortal} from "react-dom";

export default function TermsModalTrigger() {
    const [showTermsModal, setShowTermsModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setShowTermsModal(true)}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
                이용약관
            </button>

            {showTermsModal && createPortal(
                <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />,
                document.body
            )}
        </>
    )
}