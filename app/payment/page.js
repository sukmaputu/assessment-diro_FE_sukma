"use client";

import { Suspense } from "react";
import PaymentInner from "./payment-inner";

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
      <PaymentInner />
    </Suspense>
  );
}
