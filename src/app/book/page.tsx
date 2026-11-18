import { Suspense } from "react";
import { BookingForm } from "./booking-form";

export default function BookPage() {
  return (
    <Suspense fallback={null}>
      <BookingForm />
    </Suspense>
  );
}
