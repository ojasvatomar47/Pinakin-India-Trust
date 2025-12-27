import crypto from "crypto";
import { NextResponse } from "next/server";
import { resend } from "@/lib/email"; // Make sure you created lib/email.ts with Resend instance

interface Donor {
    name: string;
    email: string;
    amount: number;
    note?: string;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            donor,
        }: {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
            donor: Donor;
        } = body;

        // 1️⃣ Verify signature
        const sign = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
            .update(sign)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return NextResponse.json(
                { success: false, message: "Signature verification failed" },
                { status: 400 }
            );
        }

        // 2️⃣ Log donation (temporary)
        console.log("Donation Success:", {
            donor,
            razorpay_payment_id,
            razorpay_order_id,
        });

        // 3️⃣ Send Thank-You Email (Resend)
        if (donor.email) {
            try {
                await resend.emails.send({
                    from: "onboarding@resend.dev",
                    to: donor.email,
                    subject: "Thank you for your donation ❤️",
                    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 20px; background-color: #f7f7f7;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background-color: #16a34a; color: #fff; text-align: center; padding: 20px 0;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Your Donation ❤️</h1>
          </div>

          <!-- Body -->
          <div style="padding: 20px;">
            <p style="font-size: 16px;">Hi <strong>${donor.name}</strong>,</p>
            <p style="font-size: 16px;">
              Thank you for donating <strong>₹${donor.amount}</strong> to our cause. Your support helps us make a real impact!
            </p>
            ${donor.note
                            ? `<p style="font-size: 15px; font-style: italic; color: #555;">Your note: "${donor.note}"</p>`
                            : ""
                        }

            <p style="font-size: 16px;">We truly appreciate your generosity and commitment.</p>

            <!-- CTA Button -->
            <div style="text-align: center; margin: 25px 0;">
              <a href="https://pinakinindiatrust.com" target="_blank" style="
                background-color: #16a34a;
                color: #fff;
                padding: 12px 24px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                display: inline-block;
              ">
                Visit Our Website
              </a>
            </div>

            <p style="font-size: 14px; color: #777; text-align: center;">
              — Pinakin India Trust
            </p>
          </div>

        </div>
      </div>
    `,
                });
                console.log("Beautiful email sent successfully to", donor.email);
            } catch (err) {
                console.error("Failed to send email:", err);
            }
        }

        // 4️⃣ TODO: Save to database if needed

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Payment verification error:", err);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
