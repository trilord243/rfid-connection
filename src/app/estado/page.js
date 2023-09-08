"use client";
import { useEffect, useState } from "react";

const puntoAzul = {
  closet: "top-[200px] left-[800px]",
  escritorio: "top-[440px] left-[690px]",
  bano: "top-[450px] left-[950px]",
  entrada: "top-[740px] left-[1000px]",
};

const puntoRojo = {
  closet: "top-[250px] left-[720px]",
  escritorio: "top-[450px] left-[670px]",
  bano: "top-[470px] left-[960px]",
  entrada: "top-[700px] left-[1050px]",
};

const Estado = () => {
  const [dataClothes, setDataClothes] = useState([]);
  const [posicionRojo, setPosicionRojo] = useState("");
  const [posicionAzul, setPosicionAzul] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/data");
      const data = await res.json();
      console.log(data);
      setDataClothes(data);

      const rojo = data.find((item) => item.id === "e280117000000208911b14e2");
      const azul = data.find((item) => item.id === "e280117000000208911b1cf9");
      console.log(rojo.location, azul.location);

      if (rojo) {
        setPosicionRojo(puntoRojo[rojo.location]);
      }
      if (azul) {
        setPosicionAzul(puntoAzul[azul.location]);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  console.log(posicionAzul, posicionRojo);
  return (
    <div className="w-full flex justify-center items-center relative">
      <img
        src="/80998825-interior-clothing-store-isometric-view-vector-transformed-removebg-preview.svg"
        alt="Descripción de la imagen"
        className="h-[900px] w-[900px]"
      />
      {/* Punto rojo */}
      <div
        className={`absolute ${posicionRojo} w-4 h-4 bg-red-500 rounded-full`}
      ></div>

      {/* Punto azul */}
      <div
        className={`absolute ${posicionAzul} w-4 h-4 bg-blue-500 rounded-full`}
      ></div>
    </div>
  );
};

export default Estado;
