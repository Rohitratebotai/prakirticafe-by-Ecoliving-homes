import React, { useState, useMemo } from 'react';
import MainLayout from '../layout/MainLayout';
import { EcolivingData } from '../ecolivingdata';

// ─── Types matching the exact data shape ─────────────────────────────────────
interface SubStay {
    id: number;
    name: string;
    city: string;
    images: string;
    description: string;
}

interface Category {
    id: number;
    living_category: string;
    sub_living_category: SubStay[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const toTitleCase = (str: string) =>
    str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

const CATEGORY_META: Record<string, { emoji: string; tagline: string }> = {
    'boutique stays & private villas': { emoji: '🏡', tagline: 'Intimate luxury, naturally styled.' },
    'eco farms & community living':    { emoji: '🌾', tagline: 'Live close to the soil and spirit.' },
    'heritage legacy':                 { emoji: '🏛️', tagline: 'Where history breathes and walls whisper.' },
    'mudhouses & earth stays':         { emoji: '🏺', tagline: 'Handbuilt, grounded, alive.' },
    'nature inspired homes':           { emoji: '🌲', tagline: 'Where nature slows your breath.' },
    'off grid & sustainable living':   { emoji: '☀️', tagline: 'Solar-powered. Zero-waste. Wildly alive.' },
    'wellness & mindful retreats':     { emoji: '🧘', tagline: 'Heal, restore, return to yourself.' },
};

const getMeta = (cat: string) =>
    CATEGORY_META[cat.toLowerCase()] ?? { emoji: '🌿', tagline: '' };

// ─── Stay Card ────────────────────────────────────────────────────────────────
const StayCard: React.FC<{ stay: SubStay; index: number }> = ({ stay, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <article
            className="bg-white overflow-hidden flex flex-col cursor-pointer"
            style={{ animationDelay: `${index * 50}ms` }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div className="relative overflow-hidden h-56">
                <img
                    src={stay.images}
                    alt={stay.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
                />
                {/* Scrim on hover */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${hovered ? 'opacity-25' : 'opacity-0'}`} />
                {/* City pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[0.6rem] tracking-widest uppercase px-2.5 py-1 rounded-full">
                    <span>📍</span>
                    <span>{toTitleCase(stay.city)}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-amber-950 text-base leading-snug mb-2">
                    {toTitleCase(stay.name)}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed flex-1 line-clamp-3">
                    {stay.description}
                </p>
                <button className="mt-4 self-start flex items-center gap-1 text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-green-700 hover:text-amber-900 transition-colors group/btn">
                    Explore Stay
                    <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </button>
            </div>
        </article>
    );
};

// ─── Custom Dropdown ──────────────────────────────────────────────────────────
const Dropdown: React.FC<{
    categories: Category[];
    selected: Category | null;
    onChange: (cat: Category | null) => void;
}> = ({ categories, selected, onChange }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full max-w-xs">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between gap-3 bg-white border border-stone-300 hover:border-green-700 transition-colors px-5 py-3 text-sm shadow-sm"
            >
                <span className="flex items-center gap-2 font-medium text-amber-950 truncate">
                    {selected ? (
                        <>
                            <span>{getMeta(selected.living_category).emoji}</span>
                            <span className="truncate">{toTitleCase(selected.living_category)}</span>
                        </>
                    ) : (
                        <span className="text-stone-400">All Categories</span>
                    )}
                </span>
                <span className={`text-stone-400 text-[0.6rem] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {open && (
                <div className="absolute top-full left-0 right-0 z-50 bg-white border border-stone-200 shadow-xl mt-1 max-h-72 overflow-y-auto">
                    <button
                        onClick={() => { onChange(null); setOpen(false); }}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-sm text-left hover:bg-amber-50 transition-colors ${!selected ? 'bg-amber-50 font-semibold text-amber-900' : 'text-stone-600'}`}
                    >
                        <span>🌿</span>
                        <span>All Categories</span>
                    </button>
                    <div className="h-px bg-stone-100 mx-4" />
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { onChange(cat); setOpen(false); }}
                            className={`w-full flex items-center gap-3 px-5 py-3 text-sm text-left hover:bg-amber-50 transition-colors ${selected?.id === cat.id ? 'bg-amber-50 font-semibold text-amber-900' : 'text-stone-600'}`}
                        >
                            <span>{getMeta(cat.living_category).emoji}</span>
                            <span className="flex-1 capitalize">{toTitleCase(cat.living_category)}</span>
                            <span className="text-xs text-stone-400 shrink-0">{cat.sub_living_category.length}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

// ─── Category Section ─────────────────────────────────────────────────────────
const CategorySection: React.FC<{ category: Category }> = ({ category }) => {
    const { emoji, tagline } = getMeta(category.living_category);
    return (
        <section className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
                <div>
                    <p className="text-xs tracking-[0.28em] uppercase text-green-700 font-medium mb-1.5">
                        {emoji} {toTitleCase(category.living_category)}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-amber-950 italic leading-tight">
                        {tagline}
                    </h2>
                </div>
                <p className="text-xs text-stone-400 tracking-widest uppercase shrink-0">
                    {category.sub_living_category.length}{' '}
                    {category.sub_living_category.length === 1 ? 'property' : 'properties'}
                </p>
            </div>

            <div className="w-full h-px bg-stone-200 mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {category.sub_living_category.map((stay, i) => (
                    <StayCard key={stay.id} stay={stay} index={i} />
                ))}
            </div>
        </section>
    );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const Living: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [search, setSearch] = useState('');

    const typedData = EcolivingData as Category[];
    const totalStays = typedData.reduce((acc, c) => acc + c.sub_living_category.length, 0);

    const displayCategories = useMemo(() => {
        let cats = selectedCategory ? [selectedCategory] : typedData;
        if (search.trim()) {
            const q = search.toLowerCase();
            cats = cats
                .map((cat) => ({
                    ...cat,
                    sub_living_category: cat.sub_living_category.filter(
                        (s) =>
                            s.name.toLowerCase().includes(q) ||
                            s.city.toLowerCase().includes(q) ||
                            s.description.toLowerCase().includes(q),
                    ),
                }))
                .filter((cat) => cat.sub_living_category.length > 0);
        }
        return cats;
    }, [selectedCategory, search, typedData]);

    const resultCount = displayCategories.reduce((a, c) => a + c.sub_living_category.length, 0);

    return (
        <MainLayout>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap'); .font-serif { font-family: "Playfair Display", serif !important; }`}</style>

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section className="relative min-h-[68vh] flex flex-col items-center justify-center overflow-hidden bg-amber-950 px-6 py-24 text-center">
                <div className="absolute inset-0 bg-linear-to-b from-amber-950 via-amber-900/90 to-green-950 pointer-events-none" />
                <span className="absolute top-0 left-0 text-[14rem] opacity-[0.04] select-none pointer-events-none leading-none">🌿</span>
                <span className="absolute bottom-0 right-0 text-[14rem] opacity-[0.04] select-none pointer-events-none leading-none">🏺</span>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <span className="inline-block text-xs tracking-[0.28em] uppercase text-green-300 border border-green-400/40 rounded-full px-5 py-1.5 mb-8">
                        🌱 For Living
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-normal leading-[1.05] text-amber-50 mb-5">
                        Stays That Feel Like
                        <br />
                        <em className="italic text-green-300">They Belong to the Earth</em>
                    </h1>
                    <p className="text-amber-200/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Every place we share is chosen for its connection to the land, its people,
                        and its natural surroundings.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-10 mt-12">
                        {[
                            { num: EcolivingData.length, label: 'Categories' },
                            { num: totalStays, label: 'Handpicked Stays' },
                            { num: '12+', label: 'States Across India' },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <p className="font-serif text-3xl text-green-300">{s.num}</p>
                                <p className="text-[0.65rem] tracking-widest uppercase text-amber-300/60 mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Wave bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none overflow-hidden">
                    <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0 56 C360 0 1080 0 1440 56 L1440 56 L0 56 Z" fill="#fdf8ef" />
                    </svg>
                </div>
            </section>

            {/* ── STICKY FILTER BAR ─────────────────────────────────────────── */}
            <div className="sticky top-0 z-40 bg-amber-50/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
                {/* Top row: dropdown + search + count */}
                <div className="max-w-7xl mx-auto px-6 pt-3.5 pb-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Dropdown
                        categories={typedData}
                        selected={selectedCategory}
                        onChange={setSelectedCategory}
                    />

                    <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm pointer-events-none">🔍</span>
                        <input
                            type="text"
                            placeholder="Search by name, city or keyword…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-stone-300 hover:border-green-700 focus:border-green-700 outline-none text-sm text-amber-950 placeholder:text-stone-400 transition-colors"
                        />
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-stone-400">
                            {resultCount} {resultCount === 1 ? 'stay' : 'stays'}
                        </span>
                        {(selectedCategory || search) && (
                            <button
                                onClick={() => { setSelectedCategory(null); setSearch(''); }}
                                className="text-xs text-green-700 hover:text-amber-900 underline underline-offset-2 transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Bottom row: category pills */}
                <div className="max-w-7xl mx-auto px-6 pb-3 flex gap-2 overflow-x-auto">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`shrink-0 text-[0.6rem] tracking-widest uppercase font-semibold px-4 py-1.5 border rounded-full transition-colors ${
                            !selectedCategory
                                ? 'bg-amber-950 text-amber-50 border-amber-950'
                                : 'bg-white text-stone-500 border-stone-300 hover:border-amber-900 hover:text-amber-900'
                        }`}
                    >
                        All
                    </button>
                    {typedData.map((cat) => {
                        const { emoji } = getMeta(cat.living_category);
                        const active = selectedCategory?.id === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat)}
                                className={`shrink-0 text-[0.6rem] tracking-widest uppercase font-semibold px-4 py-1.5 border rounded-full transition-colors flex items-center gap-1.5 ${
                                    active
                                        ? 'bg-amber-950 text-amber-50 border-amber-950'
                                        : 'bg-white text-stone-500 border-stone-300 hover:border-amber-900 hover:text-amber-900'
                                }`}
                            >
                                <span>{emoji}</span>
                                <span className="hidden md:inline">{toTitleCase(cat.living_category)}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── CONTENT ───────────────────────────────────────────────────── */}
            <main className="bg-amber-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    {displayCategories.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-40 text-center">
                            <span className="text-5xl mb-5">🌾</span>
                            <h3 className="font-serif text-2xl text-amber-950 mb-3">No stays found</h3>
                            <p className="text-stone-400 text-sm max-w-xs leading-relaxed">
                                Try adjusting your search or clearing the filters to explore all our earth-built spaces.
                            </p>
                            <button
                                onClick={() => { setSelectedCategory(null); setSearch(''); }}
                                className="mt-6 text-xs tracking-[0.2em] uppercase font-semibold bg-amber-950 text-amber-50 px-6 py-3 hover:bg-amber-800 transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    ) : (
                        displayCategories.map((cat) => (
                            <CategorySection key={cat.id} category={cat as Category} />
                        ))
                    )}
                </div>
            </main>

            {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
            <section className="bg-amber-950 py-20 px-6 text-center">
                <p className="text-xs tracking-[0.28em] uppercase text-green-400/70 font-medium mb-4">
                    Don't see what you're looking for?
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-amber-50 mb-4">
                    We're always adding new{' '}
                    <em className="italic text-green-300">earth-built stays.</em>
                </h2>
                <p className="text-amber-300/60 max-w-md mx-auto mb-8 leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.05rem' }}>
                    Join the Prakriti Club to receive early access to new properties, host
                    recommendations, and slow travel guides.
                </p>
                <button className="text-xs tracking-[0.2em] uppercase font-semibold bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 transition-colors">
                    Join the Prakriti Club
                </button>
            </section>
        </MainLayout>
    );
};

export default Living;