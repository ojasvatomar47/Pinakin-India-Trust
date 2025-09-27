import OtpGate from '@/components/OtpGate';
import { getGalleryImageUrls } from '@/lib/galleryUtils';
import Image from 'next/image';

// Define Metadata for SEO
export const metadata = {
    title: 'Gallery | Pinakin India Trust',
    description: 'A visual collection of our trust\'s work and initiatives.',
};

export default async function GalleryPage() {
    // Data Fetching
    const imageUrls = await getGalleryImageUrls();

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-indigo-700 sm:text-5xl tracking-tight">
                        Our Work in Action ✨
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        A visual showcase of the projects and events supported by the Pinakin India Trust.
                    </p>
                </header>

                {/* ---------------------------------------------------- */}
                {/* INSERT OTP GATE COMPONENT */}
                {/* Only shows the OTP input field initially */}
                <OtpGate />
                {/* ---------------------------------------------------- */}

                {/* Gallery Grid (remains the same) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {imageUrls.length === 0 ? (
                        <p className="col-span-full text-center py-10 text-lg text-gray-500">
                            No images currently available. Check back soon!
                        </p>
                    ) : (
                        imageUrls.map((url, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-[1.03] hover:shadow-2xl aspect-square"
                            >
                                <Image
                                    src={url}
                                    alt={`Gallery image ${index + 1} for Pinakin India Trust`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition duration-500 ease-in-out hover:opacity-80"
                                />
                            </div>
                        ))
                    )}
                </div>

                {/* Call to Action (Fixed link) */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-700">
                        Inspired by our work? Help us add more memories!
                    </p>
                    <a
                        href="/contact"
                        className="mt-4 inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition duration-150 shadow-md"
                    >
                        Support Our Mission
                    </a>
                </div>
            </div>
        </div>
    );
};
