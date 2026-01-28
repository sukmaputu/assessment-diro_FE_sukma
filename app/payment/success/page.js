import dynamic from "next/dynamic";

const SuccessInner = dynamic(() => import("./success-inner"), {
  ssr: false,
});

export default function PaymentSuccess() {
  return <SuccessInner />;
}
