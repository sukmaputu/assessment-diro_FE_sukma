import Image from "next/image";
import { Sprout, Heart, Wind, Instagram } from "lucide-react";

function Philosophy() {
  return (
    <section className="bg-[#F9FAF7] py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#7BAE9E] font-semibold mb-4">
            The Essence
          </h2>
          <h3 className="text-4xl font-serif text-[#2E2E2E]">
            Filosofi Gerakan Kami
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-[#E6DCD0] hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#CFE6DF] rounded-full flex items-center justify-center mb-6">
              <Sprout className="text-[#7BAE9E]" size={28} />
            </div>
            <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">
              Mindful Growth
            </h4>
            <p className="text-[#6B6B6B] leading-relaxed">
              Kami percaya perkembangan sejati dimulai dari kesadaran penuh
              terhadap setiap tarikan napas dan kontraksi otot.
            </p>
          </div>

          <div className="bg-[#7BAE9E] p-10 rounded-2xl md:-mt-8 shadow-2xl text-white">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold mb-4">Holistic Balance</h4>
            <p className="opacity-90 leading-relaxed">
              Bukan sekadar olahraga, ini adalah perjalanan menyatukan kekuatan
              fisik dengan ketenangan batin yang berkelanjutan.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-[#E6DCD0] hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#CFE6DF] rounded-full flex items-center justify-center mb-6">
              <Wind className="text-[#7BAE9E]" size={28} />
            </div>
            <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">
              Pure Vitality
            </h4>
            <p className="text-[#6B6B6B] leading-relaxed">
              Mengembalikan energi vital tubuh Anda melalui teknik pernapasan
              yang benar dan penguatan otot inti (core).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudioExperience() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/pilates3.jpg"
                alt="Studio Pilates"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-48 rounded-2xl overflow-hidden border-8 border-white shadow-xl hidden md:block">
              <Image
                src="/pilates4.webp"
                alt="Detail Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-10">
            <h2 className="text-4xl font-serif text-[#2E2E2E] mb-8 leading-tight">
              Ruang Tenang untuk <br />{" "}
              <span className="italic text-[#7BAE9E]">Transformasi Anda</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <span className="text-4xl font-serif text-[#E6DCD0]">01</span>
                <div>
                  <h4 className="text-lg font-bold text-[#2E2E2E]">
                    Fasilitas Modern
                  </h4>
                  <p className="text-[#6B6B6B]">
                    Dilengkapi dengan peralatan Reformer dan Cadillac standar
                    internasional yang terawat.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 border-t border-[#E6DCD0]/50 pt-6">
                <span className="text-4xl font-serif text-[#E6DCD0]">02</span>
                <div>
                  <h4 className="text-lg font-bold text-[#2E2E2E]">
                    Atmosfer Zen
                  </h4>
                  <p className="text-[#6B6B6B]">
                    Desain interior minimalis dengan pencahayaan alami untuk
                    memaksimalkan fokus Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Instructors() {
  const trainers = [
    { name: "Thomas Jade", role: "Senior Instructor", img: "/person1.webp" },
    { name: "Sarah Angura", role: "Core Specialist", img: "/person2.webp" },
    {
      name: "David Garu",
      role: "Yoga & Pilates Expert",
      img: "/person3.webp",
    },
  ];

  return (
    <section className="bg-[#E6DCD0]/30 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif text-[#2E2E2E] mb-4">
              Bimbingan Ahli
            </h2>
            <p className="text-[#6B6B6B]">
              Berlatih bersama instruktur bersertifikat yang berdedikasi untuk
              membantu Anda mencapai potensi fisik terbaik secara aman.
            </p>
          </div>
          <button className="px-8 py-3 bg-transparent border-2 border-[#7BAE9E] text-[#7BAE9E] font-semibold rounded-full hover:bg-[#7BAE9E] hover:text-white transition-all">
            Join Our Team
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trainers.map((trainer, index) => (
            <div key={index} className="group text-center">
              <div className="relative w-full aspect-[4/5] rounded-t-[100px] rounded-b-2xl overflow-hidden mb-6">
                <Image
                  src={trainer.img}
                  alt={trainer.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7BAE9E]">
                    <Instagram size={20} />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#2E2E2E]">
                {trainer.name}
              </h4>
              <p className="text-[#7BAE9E] font-medium text-sm tracking-widest uppercase mt-1">
                {trainer.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[#7BAE9E] py-20 text-center text-white">
        <h1 className="text-5xl font-serif mb-4">About Us</h1>
        <p className="text-white/80 tracking-widest uppercase text-sm">
          Elevating your lifestyle through movement
        </p>
      </div>
      <Philosophy />
      <StudioExperience />
      <Instructors />
    </main>
  );
}
