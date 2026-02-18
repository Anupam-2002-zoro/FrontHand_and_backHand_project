import React from "react";

// import { Link ,Routes,Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import Poshak from  export the file    "./Poshak";
export const useCounter = () => {
  const [count, setCount] = useState(0);
  return { count, setCount };
};
// ??????
const Poshaklist_number = () => {
  let maplist = [
    {
      id: 1,
      image:
        "https://cdn.jsdelivr.net/gh/Anupam-2002-zoro/simple-image-/Karwachauth%20Poshak.jpg",
      name: "Karwachauth Poshak",
      details: "Traditional Rajasthani Rajputi Poshak for Karwachauth festival",
      description:
        "Beautiful red and golden themed poshak specially designed for Karwachauth. Premium fabric with heavy embroidery and traditional design.",
    },
    {
      id: 2,
      image:
        "https://cdn.jsdelivr.net/gh/Anupam-2002-zoro/simple-image-/Karwachauth%20Poshak.jpg",
      name: "Half Pivar Poshak",
      details: "Premium Wedding Collection",
      description:
        "High-quality fabric with rich traditional design ideal for special occasions.",
    },
    {
      id: 3,
      image:
        "https://cdn.jsdelivr.net/gh/Anupam-2002-zoro/simple-image-@main/Cotton%20suits/Cotton%20Dress%20Material%20With%20Cotton%20Dupatta_.jpg",
      name: "Cotton Suits",
      description:
        "Soft cotton dress material with matching cotton dupatta for daily comfort.",
    },
    {
      id: 4,
      image:
        "https://cdn.jsdelivr.net/gh/Anupam-2002-zoro/simple-image-@main/4.%20Velvet%20suits/@season_collection_2%20on%20Instagram__%20_%D9%86%D9%8A%D9%88%20%D9%83%D9%88%D9%84%D9%83%D8%B4%D9%86%E2%80%A6.jpg",
      name: "Velvet Suit",
      description:
        "Premium velvet suit with elegant embroidery design, perfect for weddings and festive occasions.",
    },
    {
      id: 5,
      image:
        "https://cdn.jsdelivr.net/gh/Anupam-2002-zoro/simple-image-@main/5.%20Rajputi%20Odhani/%23rajwadi%20lehnga%23.jpg",
      name: "Rajputi Odhani",
      description:
        "Traditional Rajputi Odhani with royal lehenga style and elegant ethnic look.",
    },
  ];

  const navigate = useNavigate(); // 👈 ye missing tha
const RoutingPage = (id) => {
  localStorage.setItem("poshakId", id);

  // 3 second baad remove ho jayega
  setTimeout(() => {
    localStorage.removeItem("poshakId");
    console.log("localStorage cleared");
  }, 3000);

  navigate("/poshak");
};


  return (
    <>
      <div className="mt-[2%]  mb-[4%] p-[2%] border ">
        <div className=" flex p-[3%]  justify-center   bg-gradient-to-r from-indigo-900 via-blue-800 to-pink-700 h-[100%]">
          {maplist.map((item, index) => (
            <div
              key={item.id}
              onClick={() => RoutingPage(item.id)}
              className="w-[18%] mx-[1%] rounded-2xl  hover:scale-100 overflow-hidden shadow-lg 
              relative transition-all  duration-500 ease-in-out
              hover:-translate-y-[30px]  
              hover:z-50"
            >
              {/* Image Section */}
              <div
                className="h-[400px] bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 w-full bg-white p-6 transition-all duration-500 group-hover:bg-pink-700">
                <h2 className="text-xl font-semibold">
                  {item.name.length > 12
                    ? item.name.slice(0, 12) + "..."
                    : item.name}
                </h2>

                <p className="text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Poshaklist_number;
