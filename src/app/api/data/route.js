import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await conn.query("SELECT * FROM clothes");
  return NextResponse.json(data);
}
