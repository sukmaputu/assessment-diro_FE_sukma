import dynamic from "next/dynamic";

const PaymentInner = dynamic(() => import("./payment-inner"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  ),
});

export default function PaymentPage() {
  return <PaymentInner />;
}
