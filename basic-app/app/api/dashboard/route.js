import { NextResponse } from "next/server";
import dbConnect from "@lib/mongoose";
import Users from "@models/Users";

export const GET = async (req) => {
  await dbConnect();
  const data = await Users.find({});

  return NextResponse.json({ data }, { status: 200 });
};
