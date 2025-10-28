import { NextResponse } from "next/server";
import { connectDB } from "../../mongoDB"; // ✅ correct relative path
import { Habit } from "../../models/Habit"; // ✅ correct relative path to your model

// Handles GET request — fetch all habits from MongoDB
export async function GET() {
  try {
    // Connect to MongoDB
    await connectDB();

    // Fetch habits sorted by latest created
    const habits = await Habit.find().sort({ createdAt: -1 });

    // Return habits as JSON
    return NextResponse.json(habits);
  } catch (error) {
    console.error("Error fetching habits:", error);
    return NextResponse.json(
      { message: "❌ Failed to fetch habits", error: String(error) },
      { status: 500 }
    );
  }
}

// Uncomment later if you want POST route
// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const data = await req.json();
//     const newHabit = await Habit.create(data);
//     return NextResponse.json(newHabit, { status: 201 });
//   } catch (error) {
//     console.error("Error creating habit:", error);
//     return NextResponse.json(
//       { message: "❌ Failed to create habit", error: String(error) },
//       { status: 500 }
//     );
//   }
// }
