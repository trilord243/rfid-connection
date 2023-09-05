import { fetchToken } from "@/rfidAPI/fetchToken";
import { stopScanner } from "@/rfidAPI/stopScanner";
import { startScanner } from "@/rfidAPI/startScanner";

import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(req, res) {
  /*  try {
    const token = await fetchToken();
    console.log(token.message);
  } catch (error) {
    console.log("hubo un erro de conexion");
  } */
  /*  startScanner();
  stopScanner(); */
  startScanner();
  //stopScanner();

  return NextResponse.json({ message: "Hello Get" });
}

export async function POST(req, res) {
  try {
    // Obtener datos de la base de datos
    const data = await conn.query("SELECT * FROM clothes");

    // Obtener el cuerpo de la solicitud
    const body = await req.json();
    const idHex = body[0].data.idHex;
    const antenna = body[0].data.antenna;

    console.log(antenna, idHex);
    console.log(data);

    // Comprobar si existe una fila con idHex coincidente
    const matchingRow = data.find((row) => row.id === idHex);

    if (matchingRow) {
      let locationToUpdate;

      // Usar un switch para asignar el valor de location en función del valor de antenna
      switch (antenna) {
        case 1:
          locationToUpdate = "escritorio";
          break;
        case 2:
          locationToUpdate = "escritorio";
          break;
        case 3:
          locationToUpdate = "closet";
          break;
        case 4:
          locationToUpdate = "bano";
          break;
        default:
          return NextResponse.json({ message: "Invalid antenna value" });
      }

      // Actualizar la ubicación para la fila que coincida
      await conn.query("UPDATE clothes SET location = ? WHERE id = ?", [
        locationToUpdate,
        idHex,
      ]);
      return NextResponse.json({ message: "Location updated!" });
    } else {
      return NextResponse.json({
        message: "Matching row not found",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
