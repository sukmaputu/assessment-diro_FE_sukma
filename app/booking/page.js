"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState("private");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const packages = [
    {
      id: "private",
      name: "Private Reformer",
      description: "Sesi 1-on-1 fokus pada teknik dan postur tubuh.",
      price: "Rp 350.000",
    },
    {
      id: "group",
      name: "Group Class",
      description: "Latihan bersama komunitas (maksimal 6 orang).",
      price: "Rp 150.000",
    },
  ];

  const times = [
    "07:00",
    "08:30",
    "10:00",
    "11:30",
    "13:00",
    "14:30",
    "16:00",
    "19:00",
  ];

  const courts = ["Court A", "Court B", "Court C", "Court D"];

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !selectedCourt || !name || !email) {
      setError("Lengkapi semua data sebelum melanjutkan");
      return;
    }

    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          booking_date: selectedDate,
          booking_time: selectedTime,
          court: selectedCourt,
          package: selectedPackage,
          price: selectedPackage === "private" ? 350000 : 150000,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();

      router.push(`/payment?booking_id=${data.booking_id}`);
    } catch (err) {
      setError("Terjadi kesalahan, silakan coba lagi");
    }
  };

  return (
    <main className="bg-[#F9FAF7] min-h-screen relative">
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-4">
              Reservasi Berhasil 🎉
            </h2>
            <p className="text-[#6B6B6B] mb-8">
              Terima kasih, reservasi kamu telah berhasil dibuat.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-[#7BAE9E] text-white px-8 py-3 rounded-xl font-semibold hover:brightness-95 transition-all"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      <section className="bg-[#7BAE9E] py-20 text-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-serif mb-4 text-white">
            Book Your Studio
          </h1>
          <p className="text-white/80 tracking-widest uppercase text-sm">
            Temukan ketenangan dan kekuatan tubuh Anda di studio pilates kami
            yang modern.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-[#2E2E2E] text-2xl font-bold mb-8">
              Pilih Paket Latihan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`cursor-pointer bg-white p-8 rounded-3xl border-2 transition-all ${
                    selectedPackage === pkg.id
                      ? "border-[#7BAE9E]"
                      : "border-[#E6DCD0]"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold ${
                      selectedPackage === pkg.id
                        ? "text-[#7BAE9E]"
                        : "text-[#2E2E2E]"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-[#6B6B6B] mt-2">{pkg.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-[#2E2E2E] text-3xl font-bold">
                      {pkg.price}
                    </span>
                    <span className="text-[#6B6B6B]">/sesi</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[#2E2E2E] text-2xl font-bold mb-4">
              Pilih Tanggal
            </h2>

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedTime("");
                setSelectedCourt("");
              }}
              className="mb-12 w-full max-w-sm bg-white border border-[#E6DCD0] p-4 rounded-xl outline-none focus:border-[#7BAE9E]"
            />

            <h2 className="text-[#2E2E2E] text-2xl font-bold mb-8">
              Pilih Jadwal Tersedia
            </h2>

            <div className="bg-[#E6DCD0] bg-opacity-30 p-8 rounded-3xl mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {times.map((time) => (
                  <button
                    key={time}
                    disabled={!selectedDate}
                    onClick={() => {
                      if (!selectedDate) return;
                      setSelectedTime(time);
                      setSelectedCourt("");
                    }}
                    className={`py-3 rounded-xl font-semibold border transition-all ${
                      !selectedDate
                        ? "bg-[#E6E6E6] text-[#9A9A9A] border-[#D0D0D0]"
                        : selectedTime === time
                          ? "bg-[#7BAE9E] text-white border-[#7BAE9E]"
                          : "bg-white text-[#2E2E2E] border-[#E6DCD0] hover:border-[#7BAE9E]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <h2 className="text-[#2E2E2E] text-2xl font-bold mb-8">
              Pilih Court
            </h2>

            <div className="bg-[#E6DCD0] bg-opacity-30 p-8 rounded-3xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {courts.map((court) => (
                  <button
                    key={court}
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => {
                      if (!selectedDate || !selectedTime) return;
                      setSelectedCourt(court);
                    }}
                    className={`py-4 rounded-xl font-semibold border transition-all ${
                      !selectedDate || !selectedTime
                        ? "bg-[#E6E6E6] text-[#9A9A9A] border-[#D0D0D0]"
                        : selectedCourt === court
                          ? "bg-[#7BAE9E] text-white border-[#7BAE9E]"
                          : "bg-white text-[#2E2E2E] border-[#E6DCD0] hover:border-[#7BAE9E]"
                    }`}
                  >
                    {court}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-[#E6DCD0] shadow-sm sticky top-10">
              <h2 className="text-[#2E2E2E] text-xl font-bold mb-6">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B]">Tanggal</span>
                  <span className="text-[#2E2E2E] font-medium">
                    {selectedDate || "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B]">Waktu</span>
                  <span className="text-[#2E2E2E] font-medium">
                    {selectedTime || "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B]">Court</span>
                  <span className="text-[#2E2E2E] font-medium">
                    {selectedCourt || "-"}
                  </span>
                </div>
                <div className="border-t border-[#E6DCD0] pt-4 flex justify-between">
                  <span className="text-[#2E2E2E] font-bold">Total</span>
                  <span className="text-[#7BAE9E] font-bold text-xl">
                    {selectedPackage === "private"
                      ? "Rp 350.000"
                      : "Rp 150.000"}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Lengkap"
                  className="w-full bg-[#F9FAF7] border border-[#E6DCD0] p-4 rounded-xl outline-none focus:border-[#7BAE9E]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Alamat Email"
                  className="w-full bg-[#F9FAF7] border border-[#E6DCD0] p-4 rounded-xl outline-none focus:border-[#7BAE9E]"
                />

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#7BAE9E] text-white py-4 rounded-xl font-bold text-lg hover:brightness-95 transition-all shadow-lg shadow-[#7BAE9E]/20"
                >
                  Konfirmasi Booking
                </button>
              </div>

              <p className="text-[#6B6B6B] text-[12px] text-center mt-4 uppercase tracking-widest">
                Safe & Secure Payment
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
