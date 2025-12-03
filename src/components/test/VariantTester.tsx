import React, { useState } from "react";
import type { IndustryConfig } from "@/config/industries";

// Import all section components
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Benefits from "../sections/Benefits";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

const COMPONENTS: Record<string, React.ComponentType<any>> = {
    Hero,
    Services,
    Benefits,
    Testimonials,
    CTA,
    Footer,
};

const VARIANTS: Record<string, string[]> = {
    Hero: [
        "split",
        "centered-cards",
        "video-bg",
        "asymmetric",
        "editorial",
        "bento",
        "minimal-centered",
        "image-overlap",
        "diagonal-split",
        "floating-elements",
    ],
    Services: [
        "numbered-list",
        "accordion",
        "icon-grid",
        "hover-cards",
        "tabs",
        "image-cards",
        "cards",
        "timeline",
        "masonry",
        "spotlight",
    ],
    Benefits: [
        "counter-cards",
        "progress-bars",
        "timeline",
        "radial",
        "comparison",
        "animated-counter",
        "stats",
        "features",
        "bento",
        "icon-list",
    ],
    Testimonials: [
        "carousel",
        "grid",
        "featured",
        "stacked-cards",
        "masonry",
        "spotlight",
        "quote-slider",
        "cards-row",
        "centered-quote",
        "side-scroll",
        "floating-cards",
    ],
    CTA: [
        "default",
        "gradient-card",
        "minimal",
        "with-form",
        "floating",
        "stats-cta",
        "dual-action",
        "centered",
        "split",
        "banner",
    ],
    Footer: [
        "default",
        "minimal",
        "centered",
        "mega",
        "dark-gradient",
        "split-brand",
        "simple-dark",
        "columns-light",
        "stacked",
        "modern-grid",
    ],
};

interface VariantTesterProps {
    industryConfig: IndustryConfig;
}

export default function VariantTester({ industryConfig }: VariantTesterProps) {
    const [selectedComponent, setSelectedComponent] = useState("Hero");
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);

    const SelectedComponent = COMPONENTS[selectedComponent];
    const variantsToShow = showAll
        ? VARIANTS[selectedComponent] || []
        : selectedVariant
          ? [selectedVariant]
          : [];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50 p-4">
                <div className="container mx-auto">
                    <h1 className="text-xl font-bold mb-4">
                        Component Variant Tester
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {Object.keys(VARIANTS).map((comp) => (
                            <button
                                key={comp}
                                onClick={() => {
                                    setSelectedComponent(comp);
                                    setSelectedVariant(null);
                                    setShowAll(false);
                                }}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                    selectedComponent === comp
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {comp}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => {
                                setShowAll(true);
                                setSelectedVariant(null);
                            }}
                            className={`px-3 py-1 rounded text-xs font-medium ${
                                showAll
                                    ? "bg-green-600 text-white"
                                    : "bg-green-100 text-green-700 hover:bg-green-200"
                            }`}
                        >
                            Show All
                        </button>
                        {VARIANTS[selectedComponent]?.map((v) => (
                            <button
                                key={v}
                                onClick={() => {
                                    setSelectedVariant(v);
                                    setShowAll(false);
                                }}
                                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                                    selectedVariant === v && !showAll
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Rendered Variants */}
            <main className="pb-20">
                {variantsToShow.length > 0 ? (
                    variantsToShow.map((v) => (
                        <div key={v} className="relative">
                            <div className="absolute top-4 left-4 z-10 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-mono">
                                {selectedComponent} → {v}
                            </div>
                            <SelectedComponent
                                industry={industryConfig}
                                variant={v}
                            />
                            {showAll && (
                                <hr className="border-4 border-dashed border-gray-300 my-0" />
                            )}
                        </div>
                    ))
                ) : (
                    <div className="container mx-auto p-8">
                        <div className="bg-white rounded-lg shadow p-8 text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Select a Variant
                            </h2>
                            <p className="text-gray-600">
                                Choose a component above, then select a variant
                                to preview it.
                            </p>
                            <p className="text-gray-500 mt-4 text-sm">
                                Or click "Show All" to see all variants for the
                                selected component.
                            </p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
