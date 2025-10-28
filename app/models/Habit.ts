// models/Habit.ts
import mongoose, { Schema, models } from "mongoose";

const HabitSchema = new Schema({
  name: { type: String, required: true },
  frequency: { type: String, required: true }, // e.g., "daily"
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Habit = models.Habit || mongoose.model("Habit", HabitSchema);
export type HabitType = mongoose.InferSchemaType<typeof HabitSchema>;
