import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Users from "@/models/Users";

export const GET = async (req) => {
  await dbConnect();
  const data = await Users.find({});

  return NextResponse.json({ data }, { status: 200 });
};

export const POST = async (req) => {
  await dbConnect();
  const user = await req.json();
  const data = await Users.create(user);

  return NextResponse.json({ data }, { status: 201 });
};
