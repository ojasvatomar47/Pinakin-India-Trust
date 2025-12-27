import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";

export async function POST(req: Request) {
  const body = await req.json();
  const { amount, donor } = body;

  const order = await razorpay.orders.create({
    amount: amount * 100, // ₹ → paise
    currency: "INR",
    receipt: `donation_${Date.now()}`,
    notes: {
      name: donor.name,
      email: donor.email,
    },
  });

  return NextResponse.json(order);
}
