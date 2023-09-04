import { fetchToken } from "@/rfid/fetchToken";
import { NextResponse } from "next/server";

export function GET(req, res) {
  fetchToken();
  return NextResponse.json({ message: "Hello Get" });
}

export async function POST(req, res) {
  const body = await req.json();
  console.log(body);

  return NextResponse.json({ message: "Post!" });
}
