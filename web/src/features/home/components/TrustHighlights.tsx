"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Sparkles,
    Truck,
    BadgeCheck,
    ArrowUpRight,
} from "lucide-react";

import Container from "@/components/common/Container";

const trustHighlights = [
    {
        icon: ShieldCheck,
        title: "Premium Materials",
        description:
            "High-quality films designed for a refined finish and reliable everyday use.",
    },
    {
        icon: Sparkles,
        title: "Precision Finish",
        description:
            "Carefully engineered for clean edges, smooth application and a premium look.",
    },
    {
        icon: Truck,
        title: "Fast Dispatch",
        description:
            "Reliable order processing and dispatch for both individual and business orders.",
    },
    {
        icon: BadgeCheck,
        title: "Business Ready",
        description:
            "Flexible solutions for retailers, resellers and wholesale requirements.",
    },
];

const TrustHighlights = () => {
    return (
        <section className="relative overflow-hidden border-y bg-muted/30 py-14 sm:py-16 lg:py-20">
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-1/4 top-0 size-72 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

                <div className="absolute bottom-0 right-1/4 size-72 translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <Container
                // maxWidth="2xl" 
                className="relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-10 max-w-2xl text-center lg:mb-12"
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />

                        Why XWrap
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                        Built around{" "}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            quality and trust
                        </span>
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                        From premium materials to dependable fulfillment, every
                        part of the XWrap experience is designed with quality in
                        mind.
                    </p>
                </motion.div>

                {/* Highlights */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {trustHighlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.08,
                                }}
                                className="group relative"
                            >
                                <div className="relative h-full overflow-hidden rounded-2xl border bg-background/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
                                    {/* Hover glow */}
                                    <div className="pointer-events-none absolute -right-12 -top-12 size-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Top */}
                                    <div className="relative flex items-start justify-between">
                                        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                                            <Icon className="size-5" />
                                        </div>

                                        <ArrowUpRight className="size-4 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative mt-5">
                                        <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Bottom accent */}
                                    <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom reassurance */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground sm:text-sm"
                >
                    <span className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        Quality-focused
                    </span>

                    <span className="hidden h-3 w-px bg-border sm:block" />

                    <span className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        Retail & wholesale
                    </span>

                    <span className="hidden h-3 w-px bg-border sm:block" />

                    <span className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-secondary" />
                        Device-focused solutions
                    </span>
                </motion.div>
            </Container>
        </section>
    );
};

export default TrustHighlights;