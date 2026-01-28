"use client";

import { Suspense } from "react";
import PaymentContent from "./payment-content";

export const dynamic = "force-dynamic";

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}
