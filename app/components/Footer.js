import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F9FAF7] border-t border-[#E6DCD0] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-[#7BAE9E] mb-4">
              Studio Pilates
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed">
              Membantu Anda menemukan keseimbangan, kekuatan, dan ketenangan
              batin melalui gerakan yang dipandu secara profesional.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#2E2E2E] mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4 text-[#6B6B6B]">
              <li>
                <a href="#" className="hover:text-[#7BAE9E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7BAE9E] transition-colors">
                  Schedules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7BAE9E] transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7BAE9E] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2E2E2E] mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4 text-[#6B6B6B]">
              <li className="flex items-start gap-3">
                <span className="text-[#7BAE9E]">📍</span>
                <span>Jl. Senopati No. 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#7BAE9E]">📞</span>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#7BAE9E]">✉️</span>
                <span>hello@studiopilates.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2E2E2E] mb-6 uppercase tracking-wider text-sm">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#CFE6DF] flex items-center justify-center text-[#7BAE9E] hover:bg-[#7BAE9E] hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#CFE6DF] flex items-center justify-center text-[#7BAE9E] hover:bg-[#7BAE9E] hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#CFE6DF] flex items-center justify-center text-[#7BAE9E] hover:bg-[#7BAE9E] hover:text-white transition-all"
              >
                <Youtube size={20} />
              </a>
            </div>
            <p className="text-sm text-[#6B6B6B]">
              Senin - Minggu: 07:00 - 20:00
            </p>
          </div>
        </div>
        <div className="border-t border-[#E6DCD0] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B6B6B]">
            © 2026 Reservation Pilates. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#6B6B6B]">
            <a href="#" className="hover:text-[#7BAE9E]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#7BAE9E]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
