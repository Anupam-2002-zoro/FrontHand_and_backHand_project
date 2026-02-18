import React from 'react'
import {
  list,
  Half_Privar_Poshak,
  cottonSuits,
  velvetSuits,
  rajputiOdhani,
} from "../Add";
const POshakilstitemTRansport = () => {
  const arrlist = [
      ...list,
      ...Half_Privar_Poshak,
      ...cottonSuits,
      ...velvetSuits,
      ...rajputiOdhani,
    ];
  return (
      <div className="flex flex-wrap justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 via-blue-800 to-pink-700 p-10 gap-8">
      
      {arrlist.map((item, index) => (
        <div
          key={index}
          className="w-[280px] rounded-2xl overflow-hidden shadow-2xl group relative cursor-pointer transition-all duration-500 hover:-translate-y-6 hover:shadow-pink-500/50"
        >
          {/* Image */}
          <div
            className="h-[350px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Content */}
          <div className="absolute bottom-0 w-full bg-white p-5 transition-all duration-500 group-hover:bg-pink-600 group-hover:text-white">
            
            <h2 className="text-lg font-bold mb-2">
              {(item.dress || item.name)?.length > 18
                ? (item.dress || item.name).slice(0, 18) + "..."
                : item.dress || item.name}
            </h2>

            <p className="text-sm opacity-80 mb-2">
              {item.details || item.description}
            </p>

            <button className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-full 
            transition-all duration-500 group-hover:bg-white group-hover:text-pink-600">
              View Details
            </button>

          </div>
        </div>
      ))}
    </div>
  )
}

export default POshakilstitemTRansport
