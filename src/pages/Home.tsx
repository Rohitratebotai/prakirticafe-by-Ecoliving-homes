import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionTitle from '../components/SectionTitle';
import IconWithText from '../components/IconWithText';
import ImageCarousel from '../components/ImageCarousel';
import Button from '../components/Button';
import ImageContent from '../components/ImageContent';
import { FaClock, FaUtensils, FaBeer } from 'react-icons/fa';

// Hotels carousel: image with overlay text
const hotelCards = [
    {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        alt: "Ecoliving Homes Gir Wildlife Sanctuary",
        title: "Ecoliving Homes Gir Wildlife Sanctuary",
        location: "Gujarat, India"
    },
    {
        src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        alt: "Ecoliving Homes Dewa, Goa",
        title: "Ecoliving Homes Dewa, Goa",
        location: "Goa, India"
    },
    {
        src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
        alt: "Ecoliving Homes Mandalay Hall",
        title: "Ecoliving Homes Mandalay Hall",
        location: "Kerala, India"
    },
    {
        src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        alt: "Ecoliving Homes Galle",
        title: "Ecoliving Homes Galle",
        location: "Sri Lanka"
    }
];

const hotelBreakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
};

const Home: React.FC = () => {
    return (
        <MainLayout>
            {/* Hero Video Section - keep your existing video implementation here */}
            <section className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden">
                {/* Replace the below with your actual video component or <video> tag */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="your-video-url.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">WELCOME TO Ecoliving Homes </h1>
                    <p className="text-lg md:text-2xl text-center max-w-2xl mb-6 text-gray-200 drop-shadow-lg">A collection of intimate luxury hotels hidden in holiday destinations across India and the world.</p>
                    <div className="pointer-events-auto">
                        <Button>Book Now</Button>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
            </section>

            <section className="py-16 bg-gray-50" id="story">
                <SectionTitle>Our Story</SectionTitle>
                <div className="max-w-3xl mx-auto text-center text-gray-700 mb-12">
                    Ecoliving Homes recalls an era when holidays were sun-kissed and still, where the days were spent idling and flipping through old magazines against the backdrop of charming, quiet neighbourhoods. We combine luxury with simplicity, helping you retreat to a life you've always wanted - simple, un-hurried and filled with rich, little discoveries.
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <IconWithText icon={<FaClock />} title="Check-in & Check-out Anytime" description="Arrive and leave at your convenience." />
                    <IconWithText icon={<FaUtensils />} title="Breakfast Anytime" description="Enjoy breakfast whenever you wish." />
                    <IconWithText icon={<FaBeer />} title="Craft Beers Available" description="Enjoy a selection of local craft beers." />
                </div>
            </section>

            {/* Hotels Carousel Section */}
            <section className="py-16 px-4 bg-white" id="hotels">
                <SectionTitle>The Hotels</SectionTitle>
                <div className="w-full mx-auto">
                    <ImageCarousel
                        items={hotelCards}
                        mobileImageHeight="h-[65vh]"
                        imageHeight="h-[80vh]"
                        slidesPerView={1}
                        spaceBetween={24}
                        showNavigation
                        showPagination
                        breakpoints={hotelBreakpoints}
                        className="my-8"
                    />
                </div>
            </section>

            {/* Experiences Section */}
            <section className="px-4 md:px-10 py-16 bg-gray-50" id="experiences">
                <SectionTitle>Experiences</SectionTitle>
                <div className="w-full mx-auto">
                    <ImageContent
                        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                        title="Local Culture"
                        description="Explore the local culture and heritage with our curated experiences."
                        buttonText="Learn More"
                        imageLeft={true}
                        imageHeight="h-[80vh]"
                    />
                    <ImageContent
                        image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                        title="Nature & Adventure"
                        description="Discover new places and adventures beyond the standard tourist trail."
                        buttonText="Learn More"
                        imageLeft={false}
                        imageHeight="h-[80vh]"
                    />
                </div>
            </section>


            {/* Newsletter Section */}
            <section className="py-16 bg-white">
                <SectionTitle>Hear From Us</SectionTitle>
                <div className="max-w-xl mx-auto text-center mb-4 text-gray-700">
                    Join our mailing list for holiday inspiration and the best offers at Ecoliving Homes.
                </div>
                <form className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <input type="email" placeholder="Your email address" className="border px-4 py-2 rounded w-64" />
                    <Button>Sign Up</Button>
                </form>
            </section>
        </MainLayout>
    );
};

export default Home;