import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import ImageCarousel from '../components/ImageCarousel';
import Button from '../components/Button';

// ─── Data ─────────────────────────────────────────────────────────────────────

const stayCategories = [
    { emoji: '🏛️', title: 'Heritage Retreats', desc: 'Homes that carry stories of old walls, carved wood, courtyards, and culture preserved with love.' },
    { emoji: '🏺', title: 'Mudhouses & Earth Stays', desc: 'Handbuilt spaces of mud, stone, and bamboo—cool, grounding, and alive with natural textures.' },
    { emoji: '🌾', title: 'Eco Farms & Community Living', desc: 'Regenerative farms, village stays, and rural communities where you live close to the soil.' },
    { emoji: '🌿', title: 'Boutique Eco Villas', desc: 'Thoughtfully designed retreats that blend natural materials with comfort, warmth, and quiet luxury.' },
    { emoji: '🌲', title: 'Nature-Inspired Homestays', desc: 'Forest cabins, mountain cottages, riverside homes—where nature gently slows down your breath.' },
    { emoji: '☀️', title: 'Off-Grid & Sustainable Stays', desc: 'Solar-powered homes, zero-waste properties, remote cabins, and energy-efficient eco-lodges.' },
    { emoji: '🧘', title: 'Wellness & Mindful Retreats', desc: 'Yoga retreats, detox stays, holistic wellness centers built with eco principles.' },
];

const experiences = [
    { icon: '🌾', label: 'Meals grown on the land' },
    { icon: '🌳', label: 'Walks through forests & farms' },
    { icon: '🧘', label: 'Yoga and mindful spaces' },
    { icon: '🎨', label: 'Craft, culture & community' },
    { icon: '💧', label: 'Healing landscapes' },
    { icon: '🌱', label: 'Low-impact living' },
];

const hostReasons = [
    'We value earth-friendly architecture',
    'We support regenerative and cultural practices',
    'We bring mindful travellers to your doorstep',
    'We help you preserve your land, craft, and tradition',
    'We ensure safe, respectful guest experiences',
];

const hostLookFor = [
    'Natural or sustainable building materials',
    'Connection to local culture & community',
    'Authentic, warm hospitality',
    'Respect for land and people',
    'Quiet, peaceful surroundings',
];

const clubBenefits = [
    'Access to member discounts',
    'Customised travel insights into preferred destinations',
    'Slow travel guides & local wisdom',
    'Safe travel networks',
    'Meaningful experiences with local hosts',
    'Early invitations to community retreats & nature gatherings',
];

const clubValues = [
    'Slowness over speed',
    'Roots over rush',
    'Connection over consumption',
    'Nature over noise',
    'Travel that changes you and the world',
    'One mindful step at a time',
];

const hotelCards = [
    {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        alt: 'Heritage Retreat',
        title: 'Heritage Retreats',
        location: 'Rajasthan, India',
    },
    {
        src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        alt: 'Eco Farm Stay',
        title: 'Eco Farm Stays',
        location: 'Kerala, India',
    },
    {
        src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
        alt: 'Mudhouse Stay',
        title: 'Mudhouses & Earth Stays',
        location: 'Gujarat, India',
    },
    {
        src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
        alt: 'Nature Homestay',
        title: 'Nature-Inspired Homestays',
        location: 'Himachal Pradesh, India',
    },
];

const hotelBreakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
};

const beliefs = [
    'Homes should belong to the land',
    'Travel should nourish both traveller and host',
    'Nature is the greatest teacher',
    'Culture is meant to be lived, not consumed',
    'Slowness is a gift',
    'Community is the foundation of everything',
];

// ─── Reusable tiny components ─────────────────────────────────────────────────

const SectionLabel: React.FC<{ children: React.ReactNode; light?: boolean }> = ({ children, light }) => (
    <p className={`text-xs tracking-[0.3em] uppercase font-medium mb-3 ${light ? 'text-green-300' : 'text-green-700'}`}>
        {children}
    </p>
);

const SectionHeading: React.FC<{ children: React.ReactNode; light?: boolean; center?: boolean }> = ({ children, light, center }) => (
    <h2 className={`font-serif text-4xl md:text-5xl leading-tight mb-4 ${light ? 'text-amber-50' : 'text-amber-950'} ${center ? 'text-center' : ''}`}>
        {children}
    </h2>
);

const Divider: React.FC<{ center?: boolean; light?: boolean }> = ({ center, light }) => (
    <div className={`w-12 h-0.5 mb-6 ${light ? 'bg-green-400' : 'bg-green-600'} ${center ? 'mx-auto' : ''}`} />
);

// ─── Main page ────────────────────────────────────────────────────────────────

const Home: React.FC = () => {
    const [email, setEmail] = useState('');

    return (
        <MainLayout>
            {/* Playfair Display font import */}
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap'); .font-serif { font-family: "Playfair Display", serif !important; } .font-cormorant { font-family: "Cormorant Garamond", serif; }`}</style>

            {/* ══════════════════════════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-amber-950">
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                    src="your-video-url.mp4"
                    autoPlay loop muted playsInline
                />
                {/* Layered gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-amber-950 via-amber-900/80 to-green-900/60 pointer-events-none" />
                {/* Decorative faint emoji */}
                <span className="absolute top-0 left-0 text-[16rem] opacity-[0.03] select-none pointer-events-none leading-none">🌿</span>
                <span className="absolute bottom-0 right-0 text-[16rem] opacity-[0.03] select-none pointer-events-none leading-none">🌾</span>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <span className="inline-block text-xs tracking-[0.3em] uppercase text-green-300 border border-green-400/40 rounded-full px-5 py-1.5 mb-8">
                        🌱 Rooted in Nature · Guided by Purpose
                    </span>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] text-amber-50 mb-6">
                        Walk Gently.<br />
                        <em className="italic text-green-300">Travel Slowly.</em><br />
                        Live Earthfully.
                    </h1>

                    <p className="font-cormorant italic text-xl md:text-2xl text-amber-200/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        A home for conscious travellers who wish to explore India gently,
                        responsibly, and with an open heart.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button>Explore Stays</Button>
                        <button className="text-xs tracking-[0.2em] uppercase font-medium text-amber-100 border border-amber-100/40 px-7 py-3 hover:bg-white/10 transition-colors">
                            Join Prakriti Club
                        </button>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                OUR STORY
            ══════════════════════════════════════════════════════════════════ */}
            <section className="bg-amber-50 py-24 px-6" id="story">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image with offset border accent */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                            alt="EcolivingHomes story"
                            className="w-full h-[520px] object-cover relative z-10"
                        />
                        <div className="absolute bottom-[-1.25rem] right-[-1.25rem] w-3/5 h-3/5 border-2 border-green-500 z-0" />
                    </div>

                    {/* Text */}
                    <div>
                        <SectionLabel>Our Story</SectionLabel>
                        <SectionHeading>
                            Born from{' '}
                            <em className="italic text-green-700">Slow Journeys</em>
                            <br />Through India
                        </SectionHeading>
                        <Divider />
                        <p className="font-cormorant text-lg text-amber-900 leading-[1.85] mb-5">
                            EcolivingHomes was born from slow journeys through India's farms, forests,
                            mountains, and ancient towns—places where life follows the rhythm of nature,
                            not the clock.
                        </p>
                        <blockquote className="border-l-4 border-green-500 pl-5 my-6 font-serif text-xl italic text-green-800 leading-snug">
                            "Their homes were not tourist spots. They were living, breathing spaces
                            rooted in the soil and soul of India."
                        </blockquote>
                        <p className="font-cormorant text-lg text-amber-900 leading-[1.85]">
                            Along the way, we met families tending mud homes built by their ancestors,
                            farmers practicing regenerative cultivation, artisans carrying forward timeless
                            traditions. These weren't just stays—they were stories. EcolivingHomes was
                            born to share these stories with the world.
                        </p>
                        <button className="mt-8 text-xs tracking-[0.2em] uppercase font-medium bg-amber-950 text-amber-50 px-7 py-3 hover:bg-amber-800 transition-colors">
                            Read Full Story
                        </button>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                FOR LIVING / STAY TYPES
            ══════════════════════════════════════════════════════════════════ */}
            <section className="bg-amber-950 py-24 px-6 relative overflow-hidden" id="stays">
                <span className="absolute top-[-3rem] right-[-3rem] text-[18rem] opacity-[0.03] select-none pointer-events-none leading-none">🌿</span>
                <div className="max-w-6xl mx-auto relative z-10">
                    <SectionLabel light>For Living</SectionLabel>
                    <SectionHeading light>
                        Stays That Feel Like
                        <br />
                        <em className="italic text-green-300">They Belong to the Earth</em>
                    </SectionHeading>
                    <Divider light />
                    <p className="font-cormorant italic text-lg text-amber-200/70 max-w-xl leading-relaxed mb-12">
                        Every place we share is chosen for its connection to the land, its people,
                        and its natural surroundings—where earth, wind, wood, clay, and silence
                        shape your experience.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {stayCategories.map((s) => (
                            <div
                                key={s.title}
                                className="border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-green-400/30 transition-all duration-300 p-7 cursor-default"
                            >
                                <div className="text-3xl mb-4">{s.emoji}</div>
                                <h3 className="font-serif text-amber-50 text-lg mb-2">{s.title}</h3>
                                <p className="text-amber-300/60 text-sm leading-relaxed font-light">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                HOTEL CAROUSEL
            ══════════════════════════════════════════════════════════════════ */}
            <section className="bg-amber-50 py-24 px-6" id="hotels">
                <div className="text-center mb-12">
                    <SectionLabel>Our Properties</SectionLabel>
                    <SectionHeading center>
                        A Curated Collection of
                        <br />
                        <em className="italic text-green-700">Earth-Built Spaces</em>
                    </SectionHeading>
                </div>
                <div className="max-w-7xl mx-auto">
                    <ImageCarousel
                        items={hotelCards}
                        mobileImageHeight="h-[65vh]"
                        imageHeight="h-[80vh]"
                        slidesPerView={1}
                        spaceBetween={20}
                        showNavigation
                        showPagination
                        breakpoints={hotelBreakpoints}
                        className="my-4"
                    />
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                EXPERIENCES
            ══════════════════════════════════════════════════════════════════ */}
            <section className="bg-stone-100 py-24 px-6" id="experiences">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <SectionLabel>Travel That Rises From the Earth</SectionLabel>
                    <SectionHeading center>
                        Here, Travel Is{' '}
                        <em className="italic text-green-700">Not Rushed.</em>
                        <br />
                        It Is Rhythm, Roots & Stillness.
                    </SectionHeading>
                    <Divider center />
                    <p className="font-cormorant italic text-lg text-amber-800 max-w-xl mx-auto leading-relaxed">
                        These stays invite you to reconnect with the earth and yourself through
                        simple, meaningful, low-impact living.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                    {experiences.map((e) => (
                        <div
                            key={e.label}
                            className="bg-amber-50 border border-stone-300 p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <div className="text-3xl mb-3">{e.icon}</div>
                            <p className="text-amber-900 text-sm font-medium leading-snug">{e.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                PRAKRITI CLUB
            ══════════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-6 relative overflow-hidden bg-green-900" id="community">
                {/* Ambient glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <SectionLabel light>The Prakriti Club</SectionLabel>
                    <SectionHeading light center>
                        Join Our{' '}
                        <em className="italic text-green-300">Community</em>
                    </SectionHeading>
                    <div className="w-12 h-0.5 bg-green-400 mx-auto mb-6" />
                    <p className="font-cormorant italic text-xl text-green-100/70 max-w-2xl mx-auto leading-relaxed mb-14">
                        EcolivingHomes is more than a platform—it is a movement. A global community
                        of seekers, wanderers, storytellers, and nature lovers who believe in
                        travelling with purpose.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
                        <div>
                            <h4 className="font-serif text-green-300 text-base mb-4">What You Receive</h4>
                            <ul>
                                {clubBenefits.map((b) => (
                                    <li key={b} className="relative pl-5 py-2.5 border-b border-white/10 text-amber-100/75 text-sm">
                                        <span className="absolute left-0 top-[0.8rem] text-green-400 text-[0.55rem]">✦</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif text-green-300 text-base mb-4">When You Join, You Value</h4>
                            <ul>
                                {clubValues.map((v) => (
                                    <li key={v} className="relative pl-6 py-2.5 border-b border-white/10 text-amber-100/75 text-sm">
                                        <span className="absolute left-0 top-[0.7rem] text-[0.7rem]">🍂</span>
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <button className="text-xs tracking-[0.2em] uppercase font-medium bg-green-500 hover:bg-green-400 text-white px-8 py-3.5 transition-colors">
                        Join the Prakriti Club
                    </button>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                HOST WITH US
            ══════════════════════════════════════════════════════════════════ */}
            <section className="bg-amber-50 py-24 px-6" id="host">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Left column */}
                    <div>
                        <SectionLabel>Host With Us</SectionLabel>
                        <SectionHeading>
                            Your Home. Your Story.
                            <br />
                            <em className="italic text-green-700">Your Land.</em>
                        </SectionHeading>
                        <Divider />
                        <p className="font-cormorant text-lg text-amber-900 leading-[1.85] mb-6">
                            If you have a home that honours nature—whether a mudhouse, a heritage
                            property, a farm, or a wilderness retreat—we would love to welcome you
                            into our community of hosts.
                        </p>
                        <h4 className="font-serif text-green-700 text-base mb-4">Why host with EcolivingHomes?</h4>
                        <ul className="mb-8">
                            {hostReasons.map((r) => (
                                <li key={r} className="relative pl-6 py-3 border-b border-stone-200 text-amber-800 text-sm">
                                    <span className="absolute left-0 top-[0.8rem] text-xs">🌿</span>
                                    {r}
                                </li>
                            ))}
                        </ul>
                        <button className="text-xs tracking-[0.2em] uppercase font-medium bg-amber-950 text-amber-50 px-7 py-3 hover:bg-amber-800 transition-colors">
                            Start Hosting
                        </button>
                    </div>

                    {/* Right column */}
                    <div>
                        <h4 className="font-serif text-green-700 text-base mb-4">What We Look For</h4>
                        <div className="flex flex-col gap-2 mb-10">
                            {hostLookFor.map((w) => (
                                <div key={w} className="text-sm text-amber-900 bg-stone-100 border-l-4 border-green-500 px-4 py-3">
                                    {w}
                                </div>
                            ))}
                        </div>

                        {/* Image with pull-quote overlay */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80"
                                alt="Natural eco home"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute -top-3 -left-3 bg-green-700 text-amber-50 font-cormorant italic text-sm px-4 py-2 max-w-[220px] leading-snug">
                                If your home has a soul and a story, it belongs here.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                MISSION & VISION
            ══════════════════════════════════════════════════════════════════ */}
            <section className="bg-amber-950 py-24 px-6" id="mission">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <SectionLabel light>Our Purpose</SectionLabel>
                        <SectionHeading light center>
                            Rooted in{' '}
                            <em className="italic text-green-300">Intention</em>
                        </SectionHeading>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                label: 'Mission',
                                headline: 'To reconnect people with nature, culture, and community through slow, meaningful travel.',
                                body: "Our mission is to revive India's ancient relationship with nature—through stays that heal, experiences that teach, and journeys that honour the earth. We aim to make eco-conscious travel accessible, safe, and deeply enriching for travellers while supporting sustainable livelihoods across the country.",
                            },
                            {
                                label: 'Vision',
                                headline: 'A world where travel flows with the earth, not against it.',
                                body: "We envision India becoming a sanctuary for slow travel—where travellers choose homes built from natural materials, communities thrive through responsible tourism, and nature remains untouched, respected, and alive. A future where eco stays become the norm and rural communities flourish.",
                            },
                        ].map((card) => (
                            <div key={card.label} className="relative border border-white/10 p-10">
                                <div className="absolute top-0 left-0 w-12 h-0.5 bg-green-400" />
                                <p className="text-[0.65rem] tracking-[0.35em] uppercase text-green-400/80 font-medium mb-4">{card.label}</p>
                                <h3 className="font-serif text-amber-50 text-xl italic leading-snug mb-4">{card.headline}</h3>
                                <p className="font-cormorant text-amber-300/60 text-base leading-relaxed">{card.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                WHAT WE BELIEVE
            ══════════════════════════════════════════════════════════════════ */}
            <section className="bg-stone-100 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionLabel>What We Believe</SectionLabel>
                    <SectionHeading center>
                        <em className="italic text-green-700">Simple Truths</em> We Live By
                    </SectionHeading>
                    <Divider center />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                        {beliefs.map((belief) => (
                            <div key={belief} className="bg-amber-50 border border-stone-200 px-5 py-5 text-center">
                                <p className="font-cormorant italic text-amber-900 text-base leading-snug">{belief}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                NEWSLETTER
            ══════════════════════════════════════════════════════════════════ */}
            <section className="bg-amber-50 py-20 px-6 text-center" id="newsletter">
                <SectionLabel>Stay Connected</SectionLabel>
                <h2 className="font-serif text-3xl md:text-4xl text-amber-950 mb-3">Hear From Us</h2>
                <p className="font-cormorant italic text-lg text-amber-700 mb-8">
                    Join our mailing list for slow travel inspiration, nature guides, and the best stays at EcolivingHomes.
                </p>
                <form className="flex flex-wrap gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-stone-400 bg-white px-5 py-3 text-sm text-amber-950 outline-none focus:border-green-600 w-72"
                    />
                    <Button>Sign Up</Button>
                </form>
            </section>

        </MainLayout>
    );
};

export default Home;