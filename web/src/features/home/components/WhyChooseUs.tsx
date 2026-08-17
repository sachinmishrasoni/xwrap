"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    Boxes,
    Layers3,
    Palette,
    ShieldCheck,
    Sparkles,
    Store,
    Truck,
} from "lucide-react";

import Container from "@/components/common/Container";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Premium Quality",
        description:
            "Premium skins, wraps and lamination products designed for a refined finish and dependable everyday use.",
        className: "lg:col-span-2",
        iconClass: "bg-blue-500/10 text-blue-600",
    },
    {
        icon: Boxes,
        title: "Wide Product Range",
        description:
            "Solutions for mobile phones, laptops, tablets, lamination and professional equipment.",
        className: "lg:col-span-1",
        iconClass: "bg-violet-500/10 text-violet-600",
    },
    {
        icon: Palette,
        title: "Customization",
        description:
            "Custom skin solutions that help businesses and customers create unique finishes.",
        className: "lg:col-span-1",
        iconClass: "bg-pink-500/10 text-pink-600",
    },
    {
        icon: Store,
        title: "Built for Business",
        description:
            "Wholesale pricing, MOQ and bulk ordering capabilities designed for growing businesses.",
        className: "lg:col-span-1",
        iconClass: "bg-emerald-500/10 text-emerald-600",
    },
    {
        icon: Truck,
        title: "Reliable Ordering",
        description:
            "A streamlined shopping experience from product discovery and cart to checkout and order tracking.",
        className: "lg:col-span-1",
        iconClass: "bg-orange-500/10 text-orange-600",
    },
    {
        icon: Layers3,
        title: "Complete Solutions",
        description:
            "From skins and installation to lamination solutions, machines and accessories.",
        className: "lg:col-span-2",
        iconClass: "bg-cyan-500/10 text-cyan-600",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
            {/* Background */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-180px] top-1/4 size-[420px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute right-[-180px] bottom-0 size-[420px] rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <Container maxWidth="2xl" className="relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />
                        Why XWrap
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Designed around{" "}
                        <span className="bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-clip-text text-transparent">
                            quality and value
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                        Whether you are upgrading a single device or sourcing products
                        for your business, XWrap brings quality products and practical
                        solutions together in one platform.
                    </p>
                </motion.div>

                {/* Benefits */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;

                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.55, delay: index * 0.06 }}
                                className={benefit.className}
                            >
                                <div className="group relative h-full min-h-[220px] overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.99] sm:p-7">
                                    {/* Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Decorative circle */}
                                    <div className="absolute -right-16 -top-16 size-40 rounded-full border border-foreground/5 transition-transform duration-700 group-hover:scale-125" />

                                    {/* Icon */}
                                    <div
                                        className={`relative flex size-12 items-center justify-center rounded-2xl ${benefit.iconClass} transition-transform duration-300 group-hover:scale-105 group-active:scale-95`}
                                    >
                                        <Icon className="size-6" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative mt-6">
                                        <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                                            {benefit.title}
                                        </h3>

                                        <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Bottom accent */}
                                    <div className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary via-secondary to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Trust Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 flex flex-col gap-4 rounded-3xl border bg-muted/30 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                    <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <BadgeCheck className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold">
                                From individual purchases to wholesale requirements
                            </p>

                            <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                                Flexible product and ordering solutions for customers,
                                retailers, resellers and other business buyers.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/wholesale"
                        className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
                    >
                        Explore wholesale
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
