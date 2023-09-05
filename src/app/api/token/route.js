import { fetchToken } from "@/rfidAPI/fetchToken";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetchToken();
  return NextResponse.json(data);
}
