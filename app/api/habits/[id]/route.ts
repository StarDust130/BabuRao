// app/api/habits/[id]/route.ts
// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import { Habit } from "@/models/Habit";

// export async function GET(req: Request, { params }: any) {
//   await connectDB();
//   const habit = await Habit.findById(params.id);
//   if (!habit) return NextResponse.json({ message: "Not found" }, { status: 404 });
//   return NextResponse.json(habit);
// }

// export async function PATCH(req: Request, { params }: any) {
//   await connectDB();
//   const body = await req.json();
//   const updated = await Habit.findByIdAndUpdate(params.id, body, { new: true });
//   return NextResponse.json(updated);
// }

// export async function DELETE(req: Request, { params }: any) {
//   await connectDB();
//   await Habit.findByIdAndDelete(params.id);
//   return NextResponse.json({ message: "Deleted" });
// }
