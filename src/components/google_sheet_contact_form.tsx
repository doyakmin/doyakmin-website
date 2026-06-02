"use client";

import { useState } from "react";
import TranslatedText from './translated_text'

type SubmitStatus = "idle" | "success" | "error";

type GoogleSheetContactFormProps = {
  service: string;
  className?: string;
};

export default function GoogleSheetContactForm({ service, className = "" }: GoogleSheetContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");
  const scriptURL = process.env.NEXT_PUBLIC_CONTACT_SCRIPT_URL;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setSubmitStatus("idle");

    if (!scriptURL) {
      setSubmitStatus("error");
      setMessage("문의 접수 기능이 아직 설정되지 않았습니다. 운영팀 이메일로 문의해주세요.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const replyContact = String(formData.get("replyContact") || "").trim();
    formData.append("source", "website-contact");
    formData.append("submittedAt", new Date().toISOString());
    formData.append("service", service);
    formData.append("email", replyContact);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`서버 응답 오류 (${response.status})`);
      }

      let result: Record<string, unknown> = {};
      try {
        result = (await response.json()) as Record<string, unknown>;
      } catch {
        result = {};
      }

      const isSuccess = result.result === "success" || result.status === "success" || result.ok === true;
      if (!isSuccess && Object.keys(result).length > 0) {
        const reason = typeof result.message === "string" ? result.message : "알 수 없는 오류가 발생했습니다.";
        throw new Error(reason);
      }

      setSubmitStatus("success");
      setMessage("문의가 정상 접수되어 운영진에게 전달되었습니다. 확인 후 순차적으로 안내드리겠습니다.");
      event.currentTarget.reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "문의 접수 중 오류가 발생했습니다.";
      setSubmitStatus("error");
      setMessage(`오류가 발생했습니다: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={`space-y-5 ${className}`} onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`name-${service}`} className="mb-2 block text-sm font-black text-[#111827]">
          <TranslatedText ko="이름" en="Name" />
        </label>
        <input
          id={`name-${service}`}
          name="name"
          type="text"
          required
          className="block w-full rounded-2xl border-2 border-[#111827] px-4 py-3 text-sm font-bold shadow-none focus:outline-none focus:ring-4 focus:ring-[#b7ff2a]/60"
          placeholder="성함을 입력해주세요"
        />
      </div>

      <div>
        <label htmlFor={`reply-contact-${service}`} className="mb-2 block text-sm font-black text-[#111827]">
          <TranslatedText ko="답변 받을 연락처 (이메일 또는 카카오톡 ID)" en="Reply contact (email or KakaoTalk ID)" />
        </label>
        <input
          id={`reply-contact-${service}`}
          name="replyContact"
          type="text"
          required
          className="block w-full rounded-2xl border-2 border-[#111827] px-4 py-3 text-sm font-bold shadow-none focus:outline-none focus:ring-4 focus:ring-[#b7ff2a]/60"
          placeholder="예: your-email@example.com 또는 kakaotalk_id"
        />
      </div>

      <div>
        <label htmlFor={`category-${service}`} className="mb-2 block text-sm font-black text-[#111827]">
          <TranslatedText ko="문의 유형" en="Inquiry type" />
        </label>
        <select
          id={`category-${service}`}
          name="category"
          required
          defaultValue=""
          className="block w-full rounded-2xl border-2 border-[#111827] bg-white px-4 py-3 text-sm font-bold shadow-none focus:outline-none focus:ring-4 focus:ring-[#b7ff2a]/60"
        >
          <option value="" disabled>
            Select a type
          </option>
          <option value="app">App inquiry</option>
          <option value="business">Business proposal</option>
          <option value="event">Event inquiry</option>
          <option value="etc">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor={`message-${service}`} className="mb-2 block text-sm font-black text-[#111827]">
          <TranslatedText ko="문의 내용" en="Message" />
        </label>
        <textarea
          id={`message-${service}`}
          name="message"
          required
          rows={6}
          className="block w-full rounded-2xl border-2 border-[#111827] px-4 py-3 text-sm font-bold shadow-none focus:outline-none focus:ring-4 focus:ring-[#b7ff2a]/60"
          placeholder="문의 내용을 자세히 입력해주세요"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !scriptURL}
        className="game-button w-full disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
      >
        {isSubmitting ? "Sending..." : <TranslatedText ko="문의 등록하기" en="Submit inquiry" />}
      </button>

      {message && (
        <div
          className={`rounded-2xl border-2 p-4 text-sm font-bold ${
            submitStatus === "success" ? "border-[#111827] bg-[#b7ff2a]/40 text-[#111827]" : "border-red-500 bg-red-50 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
