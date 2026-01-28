"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentInner() {
  const params = useSearchParams();
  const router = useRouter();
  const bookingId = params.get("booking_id");
  const [loading, setLoading] = useState(false);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/payment/success?booking_id=${bookingId}`);
    }, 2000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9FAF7]">
      <div className="bg-white p-10 rounded-3xl w-full max-w-md text-center shadow">
        <h1 className="text-2xl font-bold mb-4">Payment Gateway</h1>
        <p className="text-gray-500 mb-6">
          Booking ID: <b>{bookingId}</b>
        </p>

        <div className="border p-4 rounded-xl mb-6">
          <p className="text-sm text-gray-500">Metode Pembayaran</p>
          <p className="font-semibold mt-2">💳 Kartu Kredit (Fake)</p>
        </div>

        <button
          onClick={handlePay}
          disabled={loading}
          className="w-full bg-[#7BAE9E] text-white py-4 rounded-xl font-bold"
        >
          {loading ? "Memproses..." : "Bayar Sekarang"}
        </button>
      </div>
    </main>
  );
}
