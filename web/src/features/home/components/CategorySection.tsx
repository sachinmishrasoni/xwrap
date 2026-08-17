"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Smartphone,
    Laptop,
    Tablet,
    Layers3,
    Scissors,
    Sparkles,
    Cog,
    Package,
} from "lucide-react";

import Container from "@/components/common/Container";

const categories = [
    {
        title: "Mobile Skins",
        description: "Premium skins for smartphones",
        href: "/products/mobile-skins",
        icon: Smartphone,
        className: "sm:col-span-2 lg:col-span-2",
        gradient: "from-blue-600/15 via-indigo-500/10 to-transparent",
        iconBg: "bg-blue-500/10 text-blue-600",
    },
    {
        title: "Laptop Skins",
        description: "Premium protection & style",
        href: "/products/laptop-skins",
        icon: Laptop,
        className: "lg:col-span-1",
        gradient: "from-violet-600/15 via-purple-500/10 to-transparent",
        iconBg: "bg-violet-500/10 text-violet-600",
    },
    {
        title: "Tablet Skins",
        description: "Designed for a perfect fit",
        href: "/products/tablet-skins",
        icon: Tablet,
        className: "lg:col-span-1",
        gradient: "from-cyan-500/15 via-sky-500/10 to-transparent",
        iconBg: "bg-cyan-500/10 text-cyan-600",
    },
    {
        title: "Lamination Rolls",
        description: "Professional lamination materials",
        href: "/products/lamination-rolls",
        icon: Layers3,
        className: "lg:col-span-1",
        gradient: "from-orange-500/15 via-amber-500/10 to-transparent",
        iconBg: "bg-orange-500/10 text-orange-600",
    },
    {
        title: "Lamination Sheets",
        description: "Quality sheets for every project",
        href: "/products/lamination-sheets",
        icon: Package,
        className: "lg:col-span-1",
        gradient: "from-emerald-500/15 via-green-500/10 to-transparent",
        iconBg: "bg-emerald-500/10 text-emerald-600",
    },
    {
        title: "Custom Skins",
        description: "Create your own unique finish",
        href: "/products/custom-skins",
        icon: Sparkles,
        className: "lg:col-span-1",
        gradient: "from-pink-500/15 via-rose-500/10 to-transparent",
        iconBg: "bg-pink-500/10 text-pink-600",
    },
    {
        title: "Machines",
        description: "Tools for professional application",
        href: "/products/machines",
        icon: Cog,
        className: "lg:col-span-1",
        gradient: "from-slate-500/15 via-zinc-500/10 to-transparent",
        iconBg: "bg-slate-500/10 text-slate-600",
    },
    {
        title: "Accessories",
        description: "Everything you need to get started",
        href: "/products/accessories",
        icon: Scissors,
        className: "lg:col-span-2",
        gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
        iconBg: "bg-indigo-500/10 text-indigo-600",
    },
];

const CategorySection = () => {
    return (
        <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-1/3 size-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-secondary/5 blur-3xl" />
            </div>

            <Container maxWidth="2xl" className="relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
                >
                    <div className="max-w-2xl">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                            <Sparkles className="size-3.5" />
                            Explore Collection
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Shop by{" "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-clip-text text-transparent">
                                category
                            </span>
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                            Discover premium skins, lamination solutions and professional
                            products designed for devices and businesses.
                        </p>
                    </div>

                    <Link
                        href="/categories"
                        className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
                    >
                        View all categories
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </motion.div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.55, delay: index * 0.06 }}
                                className={category.className}
                            >
                                <Link
                                    href={category.href}
                                    className="group block h-full touch-manipulation"
                                >
                                    <div className="relative h-full min-h-[210px] overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.98] active:border-primary/30 active:shadow-lg sm:min-h-[230px]">
                                        {/* Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100`}
                                        />

                                        {/* Decorative Circle */}
                                        <div className="absolute -right-16 -top-16 size-40 rounded-full border border-foreground/5 transition-transform duration-500 group-hover:scale-125 group-active:scale-110" />

                                        {/* Bottom Glow */}
                                        <div className="absolute -bottom-20 -right-10 size-44 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10 group-active:bg-primary/10" />

                                        {/* Content */}
                                        <div className="relative flex h-full flex-col">
                                            <div className="flex items-start justify-between">
                                                <div
                                                    className={`flex size-12 items-center justify-center rounded-2xl ${category.iconBg} transition-transform duration-300 group-hover:scale-105 group-active:scale-95`}
                                                >
                                                    <Icon className="size-6" />
                                                </div>

                                                <div className="flex size-9 items-center justify-center rounded-full border bg-background/70 text-muted-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground group-active:border-primary/20 group-active:bg-primary group-active:text-primary-foreground">
                                                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:-translate-y-0.5 group-active:translate-x-0.5" />
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-12">
                                                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                                                    {category.title}
                                                </h3>

                                                <p className="mt-1.5 max-w-xs text-sm leading-5 text-muted-foreground">
                                                    {category.description}
                                                </p>

                                                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary sm:translate-y-1 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                                                    Explore collection
                                                    <ArrowUpRight className="size-3.5" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Accent */}
                                        <div className="absolute bottom-0 left-6 right-6 h-0.5 origin-left bg-gradient-to-r from-primary via-secondary to-cyan-500 sm:scale-x-0 sm:transition-transform sm:duration-500 sm:group-hover:scale-x-100" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default CategorySection;
