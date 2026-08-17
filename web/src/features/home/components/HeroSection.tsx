"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    MessageCircle,
    ShieldCheck,
    Sparkles,
    Truck,
} from "lucide-react";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

const trustPoints = [
    {
        icon: ShieldCheck,
        label: "Premium Materials",
    },
    {
        icon: Sparkles,
        label: "Precision Finish",
    },
    {
        icon: Truck,
        label: "Fast Dispatch",
    },
];

const HeroSection = () => {
    return (
        <section className="relative isolate overflow-hidden bg-background">
            {/* Background Decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute -left-40 -top-40 size-[420px] rounded-full bg-primary/10 blur-3xl" />

                <div className="absolute -right-40 top-20 size-[420px] rounded-full bg-secondary/15 blur-3xl" />

                <div className="absolute bottom-[-220px] left-1/3 size-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
            </div>

            <Container
                // maxWidth="2xl"
                className="flex min-h-[calc(100svh-3.5rem)] items-center py-12 sm:py-16 md:py-20 lg:py-24"
            >
                <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-20">
                    {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="max-w-2xl"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary sm:text-sm"
                        >
                            <Sparkles className="size-3.5" />

                            Premium Device Skins
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15,
                            }}
                            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem]"
                        >
                            Give Your Device a{" "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-clip-text text-transparent">
                                New Identity.
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.25,
                            }}
                            className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                        >
                            Premium skins, wraps and lamination solutions for
                            mobile phones, laptops, tablets and more. Designed for a
                            flawless finish, protection and a style that stands out.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35,
                            }}
                            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                        >
                            {/* Shop Products */}
                            <Button
                                size="lg"
                                nativeButton={false}
                                className="group h-12 rounded-xl px-6 shadow-lg shadow-primary/20"
                                render={<Link href="/products" />}
                            >
                                Shop Products

                                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>

                            {/* Wholesale */}
                            <Button
                                variant="outline"
                                size="lg"
                                nativeButton={false}
                                className="h-12 rounded-xl px-6"
                                render={<Link href="/wholesale" />}
                            >
                                Get Wholesale Quote
                            </Button>

                            {/* WhatsApp */}
                            <Button
                                variant="ghost"
                                size="lg"
                                nativeButton={false}
                                className="h-12 rounded-xl px-4"
                                render={<Link href="/contact" />}
                            >
                                <MessageCircle className="mr-2 size-4" />

                                WhatsApp Us
                            </Button>
                        </motion.div>

                        {/* Trust Points */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45,
                            }}
                            className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t pt-6"
                        >
                            {trustPoints.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-2 text-xs font-medium text-muted-foreground sm:text-sm"
                                    >
                                        <Icon className="size-4 text-primary" />

                                        {item.label}
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="relative mx-auto w-full max-w-[600px]"
                    >
                        <div className="relative aspect-square">
                            {/* Glow */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.06, 1],
                                    opacity: [0.4, 0.6, 0.4],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute left-1/2 top-1/2 size-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
                            />

                            {/* Decorative circles */}
                            <div className="absolute inset-[8%] rounded-full border border-primary/10" />

                            <div className="absolute inset-[15%] rounded-full border border-dashed border-primary/10" />

                            {/* Device */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 1, 0, -1, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute left-1/2 top-1/2 w-[42%] -translate-x-1/2 -translate-y-1/2"
                            >
                                <div className="relative aspect-[0.48] rounded-[2.5rem] border-[7px] border-foreground/90 bg-foreground p-2 shadow-2xl shadow-primary/20">
                                    <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-secondary to-cyan-500">
                                        {/* Texture */}
                                        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:12px_12px]" />

                                        {/* Shine */}
                                        <motion.div
                                            animate={{
                                                x: ["-120%", "120%"],
                                            }}
                                            transition={{
                                                duration: 3.5,
                                                repeat: Infinity,
                                                repeatDelay: 2,
                                                ease: "easeInOut",
                                            }}
                                            className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-white/20 blur-xl"
                                        />

                                        {/* Dynamic Island */}
                                        <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

                                        {/* Device Text */}
                                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
                                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] opacity-80">
                                                XWrap
                                            </p>

                                            <p className="mt-1 text-xs font-semibold">
                                                Premium Finish
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Premium Finish Card */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute left-[2%] top-[18%] rounded-2xl border bg-background/90 p-3 shadow-xl backdrop-blur-md sm:left-[6%]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                                        <Sparkles className="size-5 text-primary" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold">
                                            Premium Finish
                                        </p>

                                        <p className="text-[11px] text-muted-foreground">
                                            Made to impress
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Precision Card */}
                            <motion.div
                                animate={{
                                    y: [0, 8, 0],
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-[16%] right-[2%] rounded-2xl border bg-background/90 p-3 shadow-xl backdrop-blur-md sm:right-[6%]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
                                        <CheckCircle2 className="size-5 text-emerald-500" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold">
                                            Precision Cut
                                        </p>

                                        <p className="text-[11px] text-muted-foreground">
                                            Device perfect fit
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
