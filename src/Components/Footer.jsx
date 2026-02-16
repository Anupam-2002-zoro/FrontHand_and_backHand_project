import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white -mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Payments */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
            <div className="flex flex-wrap gap-3">
              {["VISA", "PayPal", "Apple Pay", "Klarna", "BNPL"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-sm font-medium hover:bg-white/30 transition cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
            <p className="text-gray-200 hover:text-yellow-300">paramparaclothstore@gmail.com</p>
            <p className="text-gray-200 mt-1 hover:text-yellow-300">+91 98285 53884</p>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="hover:text-yellow-300 cursor-pointer transition">
                Shipping & Returns
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition">
                FAQ
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Join Our Newsletter
            </h3>
            <p className="text-gray-200 text-sm mb-4">
              Get latest updates & exclusive offers
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-yellow-400 text-black font-semibold px-5 rounded-r-md hover:bg-yellow-300 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mt-14 pt-8 grid md:grid-cols-2 gap-6">

          {/* Left Info */}
          <div className="text-gray-200 text-sm space-y-2">
            <p className="hover:text-yellow-300"><strong>Shop:</strong> Parampara Cloth Store</p>
            <p className="hover:text-yellow-300"><strong>Owner:</strong> Virendra Singh</p>
            <p className="hover:text-yellow-300"><strong>Registration:</strong> 081-43-789</p>
            <p className="hover:text-yellow-300"><strong>Email:</strong> paramparaclothstore@gmail.com</p>
            <p className="hover:text-yellow-300"><strong>Customer Service:</strong> +91 98285 53884</p>
            <p className="mt-3">
               
              Monday - Sunday: 9am - 8pm 
             
            </p>
          </div>

          {/* Social + Brand */}
          <div className="flex flex-col md:items-end justify-between">

            {/* Colorful Social Icons */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>

              <div className="flex gap-5">
                <a
                  href="#"
                  className="p-3 bg-blue-600 rounded-full hover:scale-110 transition transform shadow-lg"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="#"
                  className="p-3 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full hover:scale-110 transition transform shadow-lg"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  className="p-3 bg-sky-400 rounded-full hover:scale-110 transition transform shadow-lg"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>

            {/* Brand */}
            <h2 className="text-4xl font-bold mt-10 tracking-widest text-yellow-300">
              PARAMPARA.
            </h2>
          </div>
        </div>
      </div>

      <div className="text-center">© 2025 Parampara Cloth Store</div>
    </footer>
  );
}

