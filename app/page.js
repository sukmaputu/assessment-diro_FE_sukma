"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { ShieldCheck, UserCheck, Move, Flower2 } from "lucide-react";
import Link from "next/link";

function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(target);
    const totalFrames = Math.round(duration / 16);
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span ref={countRef}>{count}</span>;
}

export default function Home() {
  const benefits = [
    {
      title: "Menguatkan Otot Inti (Core) & Tubuh",
      description:
        "Pilates fokus pada penguatan otot perut, panggul, dan punggung bawah, yang merupakan pusat stabilitas tubuh.",
      icon: <ShieldCheck className="w-8 h-8 text-[#7BAE9E]" />,
    },
    {
      title: "Memperbaiki Postur Tubuh",
      description:
        "Latihan ini membantu mengoreksi postur yang buruk akibat sering duduk lama, sehingga mengurangi risiko sakit punggung dan bahu.",
      icon: <UserCheck className="w-8 h-8 text-[#7BAE9E]" />,
    },
    {
      title: "Meningkatkan Fleksibilitas & Keseimbangan",
      description:
        "Gerakan Pilates meregangkan dan memanjangkan otot, membuat tubuh lebih lentur, meningkatkan jangkauan gerak, serta memperbaiki keseimbangan.",
      icon: <Move className="w-8 h-8 text-[#7BAE9E]" />,
    },
    {
      title: "Mengurangi Stres & Meningkatkan Fokus",
      description:
        "Kombinasi teknik pernapasan dalam dan gerakan terkontrol membantu menurunkan kadar stres dan meningkatkan kesadaran tubuh (body awareness).",
      icon: <Flower2 className="w-8 h-8 text-[#7BAE9E]" />,
    },
  ];

  return (
    <main>
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pilates1.jpg"
            alt="Pilates Session"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#F9FAF7] opacity-60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9FAF7]/80 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2E2E2E] mb-6 leading-tight">
              Temukan Keseimbangan di{" "}
              <span className="text-[#7BAE9E]">Studio Pilates</span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B6B6B] mb-8 leading-relaxed max-w-lg">
              Rasakan kekuatan, fleksibilitas, dan ketenangan batin melalui
              gerakan yang dipandu secara profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="px-8 py-4 bg-[#7BAE9E] text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Book a Class Now
              </Link>
              <Link
                href="/booking"
                className="px-8 py-4 bg-white border-2 border-[#E6DCD0] text-[#2E2E2E] font-semibold rounded-lg hover:bg-[#E6DCD0] transition-all duration-300 text-center"
              >
                View Schedules
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-3/5">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2E2E2E] leading-tight mb-8">
                Welcome To <br />
                <span className="text-[#7BAE9E]">Studio Pilates</span>
              </h1>

              <p className="text-lg text-justify md:text-xl text-[#6B6B6B] leading-relaxed mb-6">
                Studio Pilates adalah ruang dedikasi bagi Anda yang ingin
                menemukan keselarasan antara tubuh dan pikiran. Kami
                mengutamakan pendekatan holistik melalui gerakan terkontrol yang
                dirancang untuk memperkuat otot inti, meningkatkan mobilitas,
                dan menyempurnakan postur tubuh.
              </p>

              <p className="text-lg text-justify text-[#6B6B6B] leading-relaxed mb-10">
                Dengan bimbingan instruktur profesional dan lingkungan yang
                tenang, kami memastikan setiap sesi latihan menjadi langkah
                nyata menuju gaya hidup yang lebih sehat, seimbang, dan penuh
                energi. Kami percaya bahwa setiap gerakan kecil memiliki dampak
                besar bagi kesehatan jangka panjang Anda.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#CFE6DF] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7BAE9E] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">
                      Mindful Movement
                    </h4>
                    <p className="text-sm text-[#6B6B6B]">
                      Gerakan presisi dan terfokus.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#CFE6DF] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7BAE9E] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">
                      Certified Trainers
                    </h4>
                    <p className="text-sm text-[#6B6B6B]">
                      Dipandu instruktur ahli.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/pilates3.jpg"
                  alt="Tentang Studio Pilates"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#E6DCD0] rounded-3xl -z-0 hidden md:block"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#7BAE9E] rounded-3xl -z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] py-20 border-b border-[#E6DCD0]/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-white shadow-sm border border-[#E6DCD0]/50">
              <div className="text-4xl md:text-5xl font-bold text-[#7BAE9E] mb-2">
                <Counter target={10} />+
              </div>
              <div className="text-[#2E2E2E] font-medium tracking-wide uppercase text-sm">
                Expert Trainers
              </div>
              <div className="w-12 h-1 bg-[#CFE6DF] mt-4 rounded-full"></div>
            </div>

            <div className="flex flex-col items-center p-8 rounded-2xl bg-white shadow-sm border border-[#E6DCD0]/50">
              <div className="text-4xl md:text-5xl font-bold text-[#7BAE9E] mb-2">
                <Counter target={20} />+
              </div>
              <div className="text-[#2E2E2E] font-medium tracking-wide uppercase text-sm">
                Daily Classes
              </div>
              <div className="w-12 h-1 bg-[#CFE6DF] mt-4 rounded-full"></div>
            </div>

            <div className="flex flex-col items-center p-8 rounded-2xl bg-white shadow-sm border border-[#E6DCD0]/50">
              <div className="text-4xl md:text-5xl font-bold text-[#7BAE9E] mb-2">
                <Counter target={500} />+
              </div>
              <div className="text-[#2E2E2E] font-medium tracking-wide uppercase text-sm">
                Happy Members
              </div>
              <div className="w-12 h-1 bg-[#CFE6DF] mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] py-20 px-6 md:px-12 font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7BAE9E] font-semibold tracking-widest uppercase text-sm">
              Wellness Journey
            </span>
            <h2 className="text-[#2E2E2E] text-3xl md:text-4xl font-bold mt-2 mb-4">
              Manfaat Detail Rutin Melakukan Pilates
            </h2>
            <div className="w-24 h-1 bg-[#E6DCD0] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-transparent hover:border-[#CFE6DF] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 p-4 rounded-xl bg-[#CFE6DF] group-hover:bg-[#7BAE9E] transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {React.cloneElement(benefit.icon, {
                        className: `w-8 h-8 ${benefit.icon.props.className} group-hover:text-white`,
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#2E2E2E] text-xl font-bold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[#E6DCD0] bg-opacity-30 text-center">
            <p className="text-[#2E2E2E] italic font-medium">
              "Pilates bukan hanya tentang kekuatan, tapi tentang keharmonisan
              antara pikiran dan tubuh."
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row bg-white border border-secondary overflow-hidden shadow-sm">
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[450px]">
              <Image
                src="/pilates2.webp"
                alt="Pilates Trial Class"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2E2E2E] mb-6">
                Kelas Percobaan untuk Anda
              </h2>

              <p className="text-lg text-[#6B6B6B] mb-2 font-light">1 hari</p>

              <p className="text-xl text-[#2E2E2E] mb-8 font-medium">
                Rp 350.000
              </p>

              <Link
                href="/booking"
                className="px-8 py-4 bg-[#7BAE9E] text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
