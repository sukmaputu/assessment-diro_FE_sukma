"use client";

import { Suspense } from "react";
import PaymentInner from "./payment-inner";

export default function PaymentContent() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <PaymentInner />
    </Suspense>
  );
}
