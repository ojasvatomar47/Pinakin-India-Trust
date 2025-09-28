import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiEye, FiZap, FiTarget, FiHeart, FiAward, FiUsers, FiBriefcase } from 'react-icons/fi';

// Trust Values/Pillars Data
const TRUST_VALUES = [
    { title: 'Transparency', icon: <FiEye />, description: 'Operating with complete openness and accountability in all financial and programmatic decisions.' },
    { title: 'Sustainable Impact', icon: <FiZap />, description: 'Focusing on long-term solutions that empower communities rather than providing temporary relief.' },
    { title: 'Integrity', icon: <FiAward />, description: 'Upholding the highest ethical standards in every interaction and project implementation.' },
    { title: 'Compassion', icon: <FiHeart />, description: 'Driven by empathy for the people we serve, prioritizing dignity and genuine need.' },
];

// Governance Data (reusing handlers from the homepage)
const TRUST_HANDLERS = [
    {
        name: 'Mr. Pinakin Verma',
        role: 'Founder & Managing Trustee',
        image: '/images/p1.jpg',
        bio: 'The visionary leader driving the trust\'s mission to empower the next generation through comprehensive educational and welfare programs.',
    },
    {
        name: 'Mrs. Anjali Rao',
        role: 'Director of Programs & Outreach',
        image: '/images/p3.jpg',
        bio: 'Responsible for strategic planning and execution of all ground-level programs, ensuring maximum social returns on investment.',
    },
    {
        name: 'Mr. Dev Singh',
        role: 'Chief Financial Officer & Compliance',
        image: '/images/p2.jpg',
        bio: 'Oversees all budgetary functions, financial reporting, and legal compliance, ensuring donor funds are used efficiently and responsibly.',
    },
];

export default function AboutUsPage() {
    return (
        <div className={`bg-gray-50`}>

            {/* ---------------------------------------------------- */}
            {/* 1. Hero Section: Mission Statement */}
            {/* ---------------------------------------------------- */}
            <section className="relative min-h-[40vh] flex items-center justify-center text-center overflow-hidden">
                <Image
                    src="/images/t2.jpg" // Reusing placeholder
                    alt="Pinakin India Trust community photo"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className="absolute inset-0 bg-indigo-900 opacity-80"></div>
                <div className="relative z-10 text-white p-6 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        Our Commitment to India&apos;s Future
                    </h1>
                    <p className="text-lg md:text-xl opacity-95 drop-shadow-md">
                        The Pinakin India Trust is registered under the Indian Trusts Act, working diligently to create impactful and measurable change in society.
                    </p>
                </div>
            </section>

            {/* ---------------------------------------------------- */}
            {/* 2. Mission, Vision, and History */}
            {/* ---------------------------------------------------- */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Mission Card */}
                    <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-indigo-600">
                        <FiTarget className="text-5xl text-indigo-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                        <p className="text-gray-600">To foster comprehensive social development by investing strategically in education, health, and sustainable livelihood programs for underserved communities across India.</p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-indigo-600">
                        <FiEye className="text-5xl text-indigo-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                        <p className="text-gray-600">A future where every individual, regardless of their background, has access to the resources and opportunities necessary to achieve their full potential.</p>
                    </div>

                    {/* History Summary */}
                    <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-indigo-600">
                        <FiBriefcase className="text-5xl text-indigo-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Our History</h3>
                        <p className="text-gray-600">Founded in [Year Placeholder] by [Founder Placeholder], the Trust has grown from a local initiative to a national partner for change, always prioritizing integrity and measurable results.</p>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------- */}
            {/* 3. Core Values Section */}
            {/* ---------------------------------------------------- */}
            <section className="bg-indigo-50 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Guiding Principles
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                        Every decision, project, and rupee spent is governed by a core set of values that ensure we maintain the highest standards of stewardship.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {TRUST_VALUES.map((value, index) => (
                            <div key={index} className="p-6 rounded-xl shadow-lg bg-white transform transition duration-300 hover:scale-[1.05] border-b-4 border-yellow-500">
                                <div className="text-5xl text-yellow-500 mx-auto mb-4 flex justify-center">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------- */}
            {/* 4. Leadership / Governance Team */}
            {/* ---------------------------------------------------- */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
                    Meet the Board of Trustees
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
                    Our leadership ensures rigorous governance and adherence to our mission. Their dedication is the bedrock of our success.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {TRUST_HANDLERS.map((handler, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-2xl border-t-8 border-indigo-500 flex flex-col items-center text-center">

                            {/* Image is large for credibility */}
                            <div className="relative w-48 h-48 mb-5 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl">
                                <Image
                                    src={handler.image}
                                    alt={`Portrait of ${handler.name}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{handler.name}</h3>
                            <p className={`text-lg font-semibold text-indigo-700 mb-4`}>{handler.role}</p>
                            <p className="text-gray-600 text-base italic">{handler.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------------------------------------------- */}
            {/* 5. Final CTA: Transparency and Contact */}
            {/* ---------------------------------------------------- */}
            <section className="bg-gray-800 text-white py-16 md:py-24 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FiUsers className="text-6xl mx-auto mb-4 text-yellow-500" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Accountability is Our Promise
                    </h2>
                    <p className="text-lg md:text-xl opacity-90 mx-auto mb-10">
                        We are committed to full financial transparency. View our public reports and contact us directly with any questions regarding our operations or governance.
                    </p>
                    <Link href="/contact"
                        className={`inline-block border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-yellow-500 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105`}>
                        Contact Governance Team →
                    </Link>
                </div>
            </section>

        </div>
    );
}
