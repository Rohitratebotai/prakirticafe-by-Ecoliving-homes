import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';

// ─── Experience sections data ─────────────────────────────────────────────────
const experiences = [
    {
        id: 1,
        emoji: '🧘',
        tag: 'Movement & Stillness',
        title: 'Yoga, Breath & Inner Stillness',
        lead: 'As the sun rises over mountains, forests, deserts, and coasts, we gather.',
        lines: ['We move.', 'We breathe.', 'We soften.'],
        body: 'Through yoga, pranayama, and meditation, we return to the rhythm of the body and the quiet pulse of awareness. These are not performances, but practices — simple, grounding, and deeply human.',
        closing: 'Stillness becomes a sanctuary.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Yoga at sunrise',
        accent: 'border-green-600',
        tagColor: 'text-green-700',
    },
    {
        id: 2,
        emoji: '🌿',
        tag: 'Immersion & Presence',
        title: 'Wellness Retreats',
        lead: 'Time expands here.',
        lines: ['Held by nature.', 'Held by community.', 'Held by intention.'],
        body: 'Days unfold with nourishing plant-based meals, reflective conversations, mindful movement, and rest without guilt. Each retreat is an immersion — not into luxury, but into presence.',
        closing: 'We come together as strangers and leave as a circle.',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Wellness retreat',
        accent: 'border-amber-600',
        tagColor: 'text-amber-700',
    },
    {
        id: 3,
        emoji: '🙏',
        tag: 'Sacred Journeys',
        title: 'Pilgrimages Across India',
        lead: 'There is a sacredness woven into this land.',
        lines: ['We travel slowly.', 'We listen deeply.', 'We honor local cultures and traditions.'],
        body: 'From Himalayan silence to ancient temple towns, from desert horizons to rivers that carry centuries of prayer — our pilgrimages are journeys of reverence.',
        closing: 'These are not tours. They are living prayers in motion.',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Pilgrimage across India',
        accent: 'border-rose-600',
        tagColor: 'text-rose-700',
    },
    {
        id: 4,
        emoji: '🌲',
        tag: 'Earth & Belonging',
        title: 'Nature-Based Retreats',
        lead: 'The Earth teaches quietly.',
        lines: [],
        body: 'In forest shade and open skies, through barefoot walks and starlit gatherings, we remember that we are not separate from the land — we are part of it. Our retreats are hosted in eco-conscious homes and community spaces that respect the environment and support local livelihoods.',
        closing: 'Here, sustainability is not a concept. It is a way of being.',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Nature retreat',
        accent: 'border-teal-600',
        tagColor: 'text-teal-700',
    },
    {
        id: 5,
        emoji: '🤝',
        tag: 'One Earth',
        title: 'Community as the Heart',
        lead: 'Through initiatives like One Earth, we nurture intentional gatherings where seekers, artists, healers, and conscious travelers come together.',
        lines: ['We share stories.', 'We share silence.', 'We share responsibility for the future we are creating.'],
        body: '',
        closing: '',
        image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Community gathering',
        accent: 'border-indigo-600',
        tagColor: 'text-indigo-700',
    },
];

// ─── Nav dot ──────────────────────────────────────────────────────────────────
const NavDot: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({ active, onClick, label }) => (
    <button
        onClick={onClick}
        title={label}
        className={`rounded-full transition-all duration-300 ${active ? 'w-6 h-2 bg-green-600' : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'}`}
    />
);

console.log(NavDot, 'NavDot component'); // Debug log to verify NavDot is defined

// ─── Experience card (alternating layout) ─────────────────────────────────────
const ExperienceBlock: React.FC<{ exp: typeof experiences[0]; index: number }> = ({ exp, index }) => {
    const imageRight = index % 2 === 0;

    return (
        <div
            id={`exp-${exp.id}`}
            className={`flex flex-col ${imageRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 items-stretch min-h-130`}
        >
            {/* Image side */}
            <div className="relative w-full md:w-1/2 overflow-hidden min-h-75 md:min-h-0">
                <img
                    src={exp.image}
                    alt={exp.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 ${imageRight ? 'bg-linear-to-r' : 'bg-linear-to-l'} from-transparent via-transparent to-amber-50/30`} />
                {/* Emoji badge */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-md">
                    {exp.emoji}
                </div>
            </div>

            {/* Text side */}
            <div className="w-full md:w-1/2 bg-amber-50 flex flex-col justify-center px-10 md:px-14 py-14">
                {/* Tag */}
                <p className={`text-xs tracking-[0.28em] uppercase font-semibold mb-4 ${exp.tagColor}`}>
                    {exp.tag}
                </p>

                {/* Title */}
                <h2 className={`font-serif text-3xl md:text-4xl text-amber-950 leading-tight mb-5 pb-5 border-b-2 ${exp.accent}`}>
                    {exp.title}
                </h2>

                {/* Lead */}
                <p className="text-amber-800 text-base leading-relaxed mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    {exp.lead}
                </p>

                {/* Poetic lines */}
                {exp.lines.length > 0 && (
                    <div className="mb-4 pl-4 border-l-2 border-stone-300 space-y-1">
                        {exp.lines.map((line, i) => (
                            <p key={i} className="text-stone-500 text-sm" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                                {line}
                            </p>
                        ))}
                    </div>
                )}

                {/* Body */}
                {exp.body && (
                    <p className="text-stone-600 text-sm leading-[1.85] mb-5">
                        {exp.body}
                    </p>
                )}

                {/* Closing */}
                {exp.closing && (
                    <p className="font-serif text-lg italic text-green-800">
                        {exp.closing}
                    </p>
                )}
            </div>
        </div>
    );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const Experiences: React.FC = () => {
    const [activeExp, setActiveExp] = useState(0);

    const scrollTo = (index: number) => {
        setActiveExp(index);
        document.getElementById(`exp-${experiences[index].id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <MainLayout>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
                .font-serif { font-family: "Playfair Display", serif !important; }
            `}</style>

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-stone-950 px-6 text-center">
                {/* Background image with overlay */}
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
                    alt="Experiences hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-linear-to-b from-stone-950/60 via-stone-950/50 to-amber-950 pointer-events-none" />

                {/* Deco */}
                <span className="absolute top-0 right-0 text-[14rem] opacity-[0.04] select-none pointer-events-none leading-none">🌿</span>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <span className="inline-block text-xs tracking-[0.3em] uppercase text-green-300 border border-green-400/40 rounded-full px-5 py-1.5 mb-8">
                        ✨ Experiences
                    </span>

                    <h1 className="font-serif text-5xl md:text-7xl font-normal leading-[1.08] text-amber-50 mb-8">
                        Not all journeys are meant
                        <br />
                        <em className="italic text-green-300">to take you away.</em>
                    </h1>

                    <p className="font-serif text-2xl md:text-3xl italic text-amber-200/80 mb-6">
                        Some are meant to bring you home.
                    </p>

                    <p className="text-amber-300/60 text-base max-w-xl mx-auto leading-relaxed">
                        At Ecolivinghomes.in, we create spaces where travel becomes a remembering —
                        of the Earth beneath your feet, the breath within your body, and the quiet
                        wisdom that lives inside you.
                    </p>

                    {/* Three pillars */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {['Intention', 'Sustainability', 'Community'].map((p) => (
                            <span key={p} className="text-xs tracking-[0.22em] uppercase text-amber-200/70 border border-amber-200/20 px-5 py-2 rounded-full">
                                {p}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden">
                    <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0 64 C360 8 1080 8 1440 64 L1440 64 L0 64 Z" fill="#fdf8ef" />
                    </svg>
                </div>
            </section>

            {/* ── INTRO BAND ────────────────────────────────────────────────── */}
            <div className="bg-amber-50 py-12 px-6">
                <p className="max-w-2xl mx-auto text-center text-amber-800 text-base leading-[1.9]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem' }}>
                    Our experiences are woven with intention, sustainability, and community.
                    They are gentle invitations to slow down, to listen, and to belong.
                </p>
            </div>

            {/* ── STICKY NAV DOTS ───────────────────────────────────────────── */}
            <div className="sticky top-0 z-40 bg-amber-50/95 py-2 backdrop-blur-sm border-b border-stone-200 shadow-sm">
                <div className="max-w-8xl mx-auto px-6 py-3 flex items-center gap-6 overflow-x-auto">
                    {experiences.map((exp, i) => (
                        <button
                            key={exp.id}
                            onClick={() => scrollTo(i)}
                            className={`shrink-0 flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase font-semibold transition-colors whitespace-nowrap ${activeExp === i ? 'text-green-700' : 'text-stone-400 hover:text-amber-900'
                                }`}
                        >
                            <span>{exp.emoji}</span>
                            <span className="hidden sm:inline">{exp.title}</span>
                            {activeExp === i && <span className="w-4 h-0.5 bg-green-600 inline-block" />}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── EXPERIENCE BLOCKS ─────────────────────────────────────────── */}
            <div className="bg-amber-50">
                {experiences.map((exp, i) => (
                    <div key={exp.id} className="border-b border-stone-200 last:border-0">
                        <ExperienceBlock exp={exp} index={i} />
                    </div>
                ))}
            </div>

            {/* ── A DIFFERENT WAY TO TRAVEL ─────────────────────────────────── */}
            <section className="bg-amber-950 py-28 px-6 relative overflow-hidden">
                <span className="absolute top-0 left-0 text-[16rem] opacity-[0.03] select-none pointer-events-none leading-none">🌏</span>
                <span className="absolute bottom-0 right-0 text-[12rem] opacity-[0.04] select-none pointer-events-none leading-none">🌿</span>

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-green-400/70 font-medium mb-6">A Different Way to Travel</p>

                    <h2 className="font-serif text-4xl md:text-5xl text-amber-50 leading-tight mb-10">
                        We believe travel can be{' '}
                        <em className="italic text-green-300">gentle.</em>
                    </h2>

                    {/* Three belief statements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-14">
                        {[
                            { icon: '🕊️', text: 'Travel can be gentle.' },
                            { icon: '💚', text: 'Healing can be collective.' },
                            { icon: '🤲', text: 'Community can be chosen with care.' },
                        ].map((b) => (
                            <div key={b.text} className="bg-amber-950 px-8 py-8 flex flex-col items-center gap-3">
                                <span className="text-2xl">{b.icon}</span>
                                <p className="font-serif text-lg italic text-amber-100/80 text-center leading-snug">{b.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-amber-300/60 text-base leading-[1.9] max-w-xl mx-auto mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                        When you journey with us, you become part of a growing circle devoted to
                        conscious living, sustainable exploration, and deeper connection — to self,
                        to others, and to the Earth.
                    </p>

                    {/* The return */}
                    <div className="border border-green-400/20 bg-green-900/20 rounded-sm px-10 py-8 mb-12">
                        <p className="font-serif text-xl italic text-green-300 leading-relaxed">
                            "This is not just an experience.
                            <br />
                            It is a return."
                        </p>
                    </div>

                    <button className="text-xs tracking-[0.2em] uppercase font-semibold bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 transition-colors">
                        Begin Your Journey
                    </button>
                </div>
            </section>

            {/* ── MINI CTA ──────────────────────────────────────────────────── */}
            <section className="bg-stone-100 py-16 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
                    {[
                        { icon: '🌄', label: 'Upcoming Retreats', cta: 'View Calendar' },
                        { icon: '🧭', label: 'Plan a Pilgrimage', cta: 'Get in Touch' },
                        { icon: '🌱', label: 'Join Prakriti Club', cta: 'Learn More' },
                    ].map((item) => (
                        <div key={item.label} className="bg-amber-50 px-8 py-10 flex flex-col items-center text-center gap-3">
                            <span className="text-3xl">{item.icon}</span>
                            <p className="font-serif text-lg text-amber-950">{item.label}</p>
                            <button className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-green-700 hover:text-amber-900 transition-colors flex items-center gap-1 group/btn mt-1">
                                {item.cta}
                                <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default Experiences;