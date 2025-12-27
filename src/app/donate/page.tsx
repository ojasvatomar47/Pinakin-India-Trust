"use client";

import { useState } from "react";
import { loadRazorpay } from "@/utils/loadRazorpay";

const PRESET_AMOUNTS = [100, 250, 500, 1000];

export default function DonatePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState<number>(500);
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false);

    const handleDonate = async () => {
        if (!name || !email || amount <= 0) {
            alert("Please fill all details correctly");
            return;
        }

        setLoading(true);

        const isLoaded = await loadRazorpay();
        if (!isLoaded) {
            alert("Razorpay SDK failed to load");
            setLoading(false);
            return;
        }

        const res = await fetch("/api/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount,
                donor: { name, email, note },
            }),
        });

        const order = await res.json();

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
            amount: order.amount,
            currency: "INR",
            name: "Your Cause Name",
            description: "Thank you for supporting ❤️",
            order_id: order.id,
            prefill: {
                name,
                email,
            },
            handler: async (response: any) => {
                await fetch("/api/verify-payment", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...response,
                        donor: { name, email, amount, note },
                    }),
                });

                alert("Thank you for your donation!");
            },
            theme: {
                color: "#16a34a",
            },
        };

        new (window as any).Razorpay(options).open();
        setLoading(false);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Donation Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Support Our Cause 🌱
                        </h1>
                        <p className="text-gray-600 text-base">
                            Your contribution helps us make a real impact.
                        </p>
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Note */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Note (optional)</label>
                        <textarea
                            rows={3}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Any message you'd like to share..."
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>

                    {/* Amount */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount (₹)</label>
                        <div className="grid grid-cols-4 gap-2 mb-3">
                            {PRESET_AMOUNTS.map((amt) => (
                                <button
                                    key={amt}
                                    onClick={() => setAmount(amt)}
                                    className={`rounded-lg py-2 text-sm font-medium border transition
                                      ${amount === amt
                                            ? "bg-green-600 text-white border-green-600"
                                            : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
                                        }`}
                                >
                                    ₹{amt}
                                </button>
                            ))}
                        </div>
                        <input
                            type="number"
                            min={1}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Custom amount"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                    </div>

                    {/* Donate Button */}
                    <button
                        onClick={handleDonate}
                        disabled={loading}
                        className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-60"
                    >
                        {loading ? "Processing..." : `Donate ₹${amount}`}
                    </button>

                    <div className="text-center text-xs text-gray-500 mt-2">
                        🔒 Secure payments powered by Razorpay
                    </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6 lg:max-w-sm lg:self-start">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Contact Information</h2>

                    <div className="flex items-start gap-3">
                        {/* Email Icon */}
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16v16H4V4z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-gray-800">Primary Email</h3>
                            <a href="mailto:pinakinindiatrust@gmail.com" className="text-green-600 hover:underline text-sm lg:text-base">
                                pinakinindiatrust@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        {/* Address Icon */}
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                            <circle cx={12} cy={10} r={3} />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-gray-800">Registered Address</h3>
                            <p className="text-gray-700 text-sm lg:text-base">
                                CORNER SHOP DA256/1, WARD NO. 19, KALYAN ENCLAVE COLONY PART 1, NEAR CHAUPAL RESTAURANT, PALWAL, Haryana - 121102
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        {/* Partnership Icon */}
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 3.13a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM2 21v-2a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2" />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-gray-800">Partnerships & CSR</h3>
                            <a href="mailto:partnerships@pinakinindiatrust.org" className="text-green-600 hover:underline text-sm lg:text-base">
                                partnerships@pinakinindiatrust.org
                            </a>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm mt-2">
                        We're happy to assist you with any queries regarding donations or our activities.
                    </p>
                </div>

            </div>
        </main>
    );
}
