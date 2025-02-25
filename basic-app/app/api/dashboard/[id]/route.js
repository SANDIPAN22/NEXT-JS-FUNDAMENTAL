import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Users from "@/models/Users";

export const GET = async (req, { params }) => {
  await dbConnect();

  const { id } = params;
  const data = await Users.findOne({ eid: id });
  if (data) {
    return NextResponse.json({ message: "Data Modified", data });
  }
  return NextResponse.json({ message: "Data is not modified" });
};

export const PUT = async (req, { params }) => {
  await dbConnect();
  const body = await req.json();

  const { id } = params;
  const data = await Users.findOne({ eid: id });
  if (data) {
    data.status = body?.status;
    data.name = body?.name;
    data.email = body?.email;
    data.team = body?.team;

    await data.save();
    return NextResponse.json({ message: "Data Modified", data });
  }
  return NextResponse.json({ message: "Data is not modified" });
};

export const DELETE = async (req, { params }) => {
  await dbConnect();

  const { id } = params;
  const data = await Users.findOne({ eid: id });
  if (data) {
    await Users.findOneAndDelete({ eid: id });
    return NextResponse.json({ message: "Data deleted" });
  }
  return NextResponse.json({ message: "Data is not deleted" });
};
