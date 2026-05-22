import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 font-body pt-16 pb-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
                <div className="space-y-4">
          <h3 className="text-2xl font-sports font-black uppercase tracking-wide text-white">
            Sport-<span className="text-arenaOrange">Nest</span>
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Book top-tier sports facilities, turfs, and courts in seconds. Your premier sports home, just a click away.
          </p>
        </div>

                <div className="space-y-4">
          <h4 className="text-white font-sports font-bold uppercase tracking-wider text-sm">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/facilities" className="hover:text-arenaOrange transition-colors">All Facilities</Link>
            </li>
            <li>
              <Link href="/myBookings" className="hover:text-arenaOrange transition-colors">My Bookings</Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-arenaOrange transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/#faqs" className="hover:text-arenaOrange transition-colors">FAQs</Link>
            </li>
          </ul>
        </div>

                <div className="space-y-4">
          <h4 className="text-white font-sports font-bold uppercase tracking-wider text-sm">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-arenaOrange text-base flex-shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-arenaOrange flex-shrink-0" />
              <a href="tel:+880123456789" className="hover:text-white transition-colors">+880 1234-56789</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-arenaOrange flex-shrink-0" />
              <a href="mailto:mdhadiuzzaman483@gmail.com" className="hover:text-white transition-colors truncate">kaziosman873@gmail.com</a>
            </li>
          </ul>
        </div>

                <div className="space-y-4">
          <h4 className="text-white font-sports font-bold uppercase tracking-wider text-sm">
            Follow Our Journey
          </h4>
          
                    <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-arenaOrange hover:border-arenaOrange transition-all duration-300 transform hover:-translate-y-1">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-arenaOrange hover:border-arenaOrange transition-all duration-300 transform hover:-translate-y-1">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-arenaOrange hover:border-arenaOrange transition-all duration-300 transform hover:-translate-y-1">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-arenaOrange hover:border-arenaOrange transition-all duration-300 transform hover:-translate-y-1">
              <FaLinkedinIn size={14} />
            </a>
          </div>

                    <p className="text-xs text-zinc-600 font-medium pt-2">
            Stay tuned for premium turf updates & discount slots!
          </p>
        </div>

      </div>

            <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-zinc-500 font-semibold">Sport-Nest</span>. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}