import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';

// ─── Data ─────────────────────────────────────────────────────────────────────
const benefits = [
    { icon: '🎟️', text: 'Access to member discounts' },
    { icon: '🗺️', text: 'Customised travel insights into preferred destinations' },
    { icon: '📖', text: 'Slow travel guides & local wisdom' },
    { icon: '🛡️', text: 'Safe travel networks' },
    { icon: '🤝', text: 'Meaningful experiences with local hosts' },
    { icon: '🌄', text: 'Early invitations to community retreats & nature gatherings' },
];

const values = [
    { leaf: '🍂', primary: 'Slowness', secondary: 'over speed' },
    { leaf: '🍂', primary: 'Roots', secondary: 'over rush' },
    { leaf: '🍂', primary: 'Connection', secondary: 'over consumption' },
    { leaf: '🍂', primary: 'Nature', secondary: 'over noise' },
];

const community = [
    { emoji: '🔭', label: 'Seekers' },
    { emoji: '🌍', label: 'Wanderers' },
    { emoji: '✍️', label: 'Storytellers' },
    { emoji: '🌿', label: 'Nature Lovers' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
const OneEarthClub: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email) setSubmitted(true);
    };

    return (
        <MainLayout>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
                .font-serif    { font-family: "Playfair Display", serif !important; }
                .font-cormorant{ font-family: "Cormorant Garamond", serif; }
            `}</style>

            {/* ══════════════════════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-green-950 px-6 text-center">
                {/* Background texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900/90 to-amber-950 pointer-events-none" />
                {/* Ambient blobs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-800/20 rounded-full blur-3xl pointer-events-none" />
                {/* Deco emojis */}
                <span className="absolute top-0 left-0 text-[14rem] opacity-[0.04] select-none pointer-events-none leading-none">🌿</span>
                <span className="absolute bottom-0 right-0 text-[14rem] opacity-[0.04] select-none pointer-events-none leading-none">🍂</span>

                <div className="relative z-10 max-w-3xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border border-green-400/30 rounded-full px-5 py-1.5 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs tracking-[0.28em] uppercase text-green-300 font-medium">
                            The One Earth Club
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-normal leading-[1.05] text-amber-50 mb-6">
                        Walk Gently.
                        <br />
                        <em className="italic text-green-300">Travel Slowly.</em>
                        <br />
                        Live Earthfully.
                    </h1>

                    <p className="font-cormorant italic text-xl md:text-2xl text-amber-200/75 max-w-xl mx-auto leading-relaxed mb-12">
                        EcolivingHomes is more than a platform — it is a movement.
                    </p>

                    {/* Community types */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {community.map((c) => (
                            <div key={c.label} className="flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-5 py-2">
                                <span className="text-base">{c.emoji}</span>
                                <span className="text-xs tracking-widest uppercase text-amber-200/70 font-medium">{c.label}</span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#join"
                        className="inline-block text-xs tracking-[0.22em] uppercase font-semibold bg-green-500 hover:bg-green-400 text-white px-8 py-4 transition-colors"
                    >
                        Join the Circle
                    </a>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden">
                    <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0 64 C360 8 1080 8 1440 64 L1440 64 L0 64 Z" fill="#fdf8ef" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                ABOUT THE MOVEMENT
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-amber-50 py-24 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <div>
                        <p className="text-xs tracking-[0.28em] uppercase text-green-700 font-medium mb-3">Join Our Community</p>
                        <h2 className="font-serif text-4xl md:text-5xl text-amber-950 leading-tight mb-5">
                            A Global Circle of{' '}
                            <em className="italic text-green-700">Conscious Travellers</em>
                        </h2>
                        <div className="w-12 h-0.5 bg-green-600 mb-6" />
                        <p className="font-cormorant text-lg text-amber-900 leading-[1.9]">
                            A global community of seekers, wanderers, storytellers, and nature
                            lovers who believe in travelling with purpose. When you join us, you
                            become part of a circle that believes in something bigger than a trip —
                            a way of being in the world.
                        </p>
                    </div>

                    {/* Visual card */}
                    <div className="relative">
                        <div className="bg-green-900 p-10 relative overflow-hidden">
                            <span className="absolute top-[-1rem] right-[-1rem] text-[8rem] opacity-[0.06] leading-none select-none">🌍</span>
                            <p className="font-cormorant italic text-green-100/80 text-xl leading-[1.9] relative z-10">
                                "Travel that changes you, and changes the world around you —
                                one mindful step at a time."
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="w-8 h-0.5 bg-green-400" />
                                <p className="text-xs tracking-widest uppercase text-green-400/70">EcolivingHomes</p>
                            </div>
                        </div>
                        {/* Offset border accent */}
                        <div className="absolute bottom-[-1rem] right-[-1rem] w-2/3 h-2/3 border-2 border-green-500/40 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                BENEFITS
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-stone-100 py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs tracking-[0.28em] uppercase text-green-700 font-medium mb-3">Membership</p>
                        <h2 className="font-serif text-4xl md:text-5xl text-amber-950 leading-tight">
                            What You Receive as a{' '}
                            <em className="italic text-green-700">Community Member</em>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {benefits.map((b, i) => (
                            <div
                                key={i}
                                className="bg-amber-50 border border-stone-200 hover:border-green-500 hover:shadow-md transition-all duration-300 p-7 group"
                            >
                                <div className="text-3xl mb-4">{b.icon}</div>
                                <p className="text-amber-900 text-sm leading-relaxed font-medium group-hover:text-green-800 transition-colors">
                                    {b.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                VALUES
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-amber-950 py-24 px-6 relative overflow-hidden">
                <span className="absolute top-0 left-0 text-[16rem] opacity-[0.03] select-none pointer-events-none leading-none">🍂</span>
                <span className="absolute bottom-0 right-0 text-[14rem] opacity-[0.03] select-none pointer-events-none leading-none">🌿</span>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-xs tracking-[0.28em] uppercase text-green-400/70 font-medium mb-3">Our Circle Values</p>
                        <h2 className="font-serif text-4xl md:text-5xl text-amber-50 leading-tight">
                            When You Join Us,
                            <br />
                            <em className="italic text-green-300">You Become Part of a Circle That Values</em>
                        </h2>
                    </div>

                    {/* 2×2 grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="bg-amber-950 hover:bg-amber-900/50 transition-colors duration-300 px-10 py-10 flex items-start gap-5 group"
                            >
                                <span className="text-2xl mt-0.5 group-hover:scale-125 transition-transform duration-300">{v.leaf}</span>
                                <div>
                                    <p className="font-serif text-2xl text-amber-50 leading-none mb-1">{v.primary}</p>
                                    <p className="font-cormorant italic text-green-300/80 text-lg">{v.secondary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                JOIN FORM
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-amber-50 py-24 px-6" id="join">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-xs tracking-[0.28em] uppercase text-green-700 font-medium mb-3">Ready to Begin?</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-amber-950 leading-tight mb-4">
                        Join the{' '}
                        <em className="italic text-green-700">One Earth Club</em>
                    </h2>
                    <div className="w-12 h-0.5 bg-green-600 mx-auto mb-6" />
                    <p className="font-cormorant italic text-lg text-amber-800 leading-relaxed mb-10">
                        Become part of a growing circle devoted to conscious living, sustainable
                        exploration, and deeper connection — to self, to others, and to the Earth.
                    </p>

                    {submitted ? (
                        /* Success state */
                        <div className="border border-green-400 bg-green-50 px-8 py-10">
                            <span className="text-4xl block mb-4">🌱</span>
                            <h3 className="font-serif text-2xl text-green-800 mb-2">Welcome to the Circle</h3>
                            <p className="font-cormorant italic text-green-700 text-lg">
                                We're glad you're here. Walk gently.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="border border-stone-300 hover:border-green-600 focus:border-green-700 outline-none bg-white px-5 py-3.5 text-sm text-amber-950 placeholder:text-stone-400 transition-colors w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="border border-stone-300 hover:border-green-600 focus:border-green-700 outline-none bg-white px-5 py-3.5 text-sm text-amber-950 placeholder:text-stone-400 transition-colors w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-xs tracking-[0.22em] uppercase font-semibold bg-green-600 hover:bg-green-500 text-white py-4 transition-colors"
                            >
                                Join the One Earth Club
                            </button>
                            <p className="text-xs text-stone-400 tracking-wide">
                                Free to join · No spam · Unsubscribe anytime
                            </p>
                        </form>
                    )}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                CLOSING STATEMENT
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-green-900 py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-950/60 via-transparent to-green-950/60 pointer-events-none" />
                <div className="relative z-10 max-w-2xl mx-auto">
                    <p className="font-serif text-2xl md:text-3xl italic text-green-100 leading-[1.7]">
                        "Travel that changes you, and changes the world around you —
                        <br className="hidden md:block" />
                        one mindful step at a time."
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="w-8 h-0.5 bg-green-400/50" />
                        <p className="text-xs tracking-[0.3em] uppercase text-green-400/60">EcolivingHomes · One Earth Club</p>
                        <div className="w-8 h-0.5 bg-green-400/50" />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default OneEarthClub;