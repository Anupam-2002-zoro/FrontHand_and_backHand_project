import React from "react";
import AboutVideo from "../assets/About_video.mp4"

export default function About() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-pink-700 to-yellow-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest mb-6">
          About Parampara
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
          Celebrating the timeless elegance of Rajputi tradition with modern craftsmanship.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="relative">
          <video
          src={AboutVideo}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl shadow-2xl w-[400px] h-96 object-cover"></video>
          <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-6 py-3 rounded-xl shadow-xl font-semibold cursor-pointer">
            Since 2010
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">
            Our Story
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Parampara Cloth Store was founded with a vision to preserve and promote
            the royal heritage of Rajputi attire. From handcrafted Bandhani Rajputi
            to traditional Rajputi Poshaks, we blend culture with elegance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our designs reflect the pride, strength, and beauty of Rajasthan’s
            royal traditions. Every outfit tells a story of grace and heritage.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-purple-900 via-pink-700 to-yellow-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Our Mission
            </h3>
            <p className="text-gray-200">
              To bring authentic Rajputi culture to every household with premium
              quality and timeless designs.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Our Vision
            </h3>
            <p className="text-gray-200">
              To become India’s leading Rajputi fashion brand preserving tradition
              with modern excellence.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Our Values
            </h3>
            <p className="text-gray-200">
              Authenticity, craftsmanship, trust, and customer satisfaction are
              the pillars of our brand.
            </p>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-4xl font-bold text-purple-900">10+</h2>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-900">5000+</h2>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-900">100+</h2>
            <p className="text-gray-600 mt-2">Unique Designs</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-900">25+</h2>
            <p className="text-gray-600 mt-2">Expert Artisans</p>
          </div>

        </div>
      </section>

    </div>
  );
}


