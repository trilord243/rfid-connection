import { NextResponse } from "next/server";

export function PUT(req, res) {
  return NextResponse.json({ message: "Hello Get" });
}
