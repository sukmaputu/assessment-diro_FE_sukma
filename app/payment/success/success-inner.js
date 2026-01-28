"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessInner() {
  const params = useSearchParams();
  const bookingId = params.get("booking_id");

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9FAF7]">
      <div className="bg-white p-12 rounded-3xl text-center max-w-md shadow">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Pembayaran Berhasil 🎉
        </h1>
        <p className="text-gray-600 mb-6">Booking kamu telah dikonfirmasi.</p>
        <b>{bookingId}</b>
      </div>
    </main>
  );
}
