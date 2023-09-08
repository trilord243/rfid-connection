"use client";
import { useEffect, useState } from "react";

const Clothes = () => {
  const [dataClothes, setDataClothes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/data");
        if (!res.ok) {
          console.error("Hubo un error en la petición");
          return;
        }
        const data = await res.json();
        console.log(data);
        setDataClothes(data);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 800);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead className="text-lg font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-300">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Tipo de Ropa</th>
              <th className="px-4 py-3">Ubicación</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {dataClothes.map((item, index) => (
              <tr key={index} className="text-gray-700">
                <td className="px-4 py-3 text-lg border">{item.id}</td>
                <td className="px-4 py-3 text-lg border">{item.tipo_ropa}</td>
                <td className="px-4 py-3 text-lg border">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clothes;
