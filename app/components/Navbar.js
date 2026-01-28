"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg text-primary font-semibold">Studio Pilates</h1>

          <div className="hidden md:flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/booking">Booking</Link>
            <Link href="/about">About</Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-white p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Reservation Pilates</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/booking" onClick={() => setOpen(false)}>
                Booking
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </div>
          </div>

          <div className="flex-1 bg-black/40" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
