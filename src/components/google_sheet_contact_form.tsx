"use client";

import { useState } from "react";

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
        <label htmlFor={`name-${service}`} className="mb-2 block text-sm font-medium text-gray-700">
          이름
        </label>
        <input
          id={`name-${service}`}
          name="name"
          type="text"
          required
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          placeholder="성함을 입력해주세요"
        />
      </div>

      <div>
        <label htmlFor={`reply-contact-${service}`} className="mb-2 block text-sm font-medium text-gray-700">
          답변 받을 연락처 (이메일 또는 카카오톡 ID)
        </label>
        <input
          id={`reply-contact-${service}`}
          name="replyContact"
          type="text"
          required
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          placeholder="예: your-email@example.com 또는 kakaotalk_id"
        />
      </div>

      <div>
        <label htmlFor={`category-${service}`} className="mb-2 block text-sm font-medium text-gray-700">
          문의 유형
        </label>
        <select
          id={`category-${service}`}
          name="category"
          required
          defaultValue=""
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
        >
          <option value="" disabled>
            유형을 선택해주세요
          </option>
          <option value="app">앱 문의</option>
          <option value="business">협업 제안</option>
          <option value="event">이벤트 문의</option>
          <option value="etc">기타</option>
        </select>
      </div>

      <div>
        <label htmlFor={`message-${service}`} className="mb-2 block text-sm font-medium text-gray-700">
          문의 내용
        </label>
        <textarea
          id={`message-${service}`}
          name="message"
          required
          rows={6}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          placeholder="문의 내용을 자세히 입력해주세요"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !scriptURL}
        className="w-full rounded-md bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isSubmitting ? "접수 중..." : "문의 등록하기"}
      </button>

      {message && (
        <div
          className={`rounded-md p-4 text-sm ${
            submitStatus === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
