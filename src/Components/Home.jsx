import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Royal Rajputi Collection",
    subtitle: "Experience Tradition with Elegance",
    image:
      "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1744362680601_tjbbe_2000x945.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75",
  },
  {
    id: 2,
    title: "Premium Rajputi Poshak",
    subtitle: "Authentic Handcrafted Designs",
    image:
      "https://yuvti.co.in/cdn/shop/articles/3_bb10bbf1-c170-49db-9b23-59c99192c038.png?crop=center&height=1200&v=1750749180&width=1200",
  },
  {
    id: 3,
    title: "Traditional Rajputi Poshak",
    subtitle: "Designed for Royal Occasions",
    image:
      "https://cdn.thevoiceoffashion.com/articleheaderimage/62de5bf3db7b9.jpg",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image Full Visible */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
              {slide.title}
            </h1>

            <p className="text-lg md:text-2xl mb-6 text-gray-200">
              {slide.subtitle}
            </p>

            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg">
              Explore Collection
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}