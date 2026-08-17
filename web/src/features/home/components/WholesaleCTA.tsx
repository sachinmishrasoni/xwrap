"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    Check,
    MessageCircle,
    Package,
    Phone,
    Sparkles,
    TrendingUp,
} from "lucide-react";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

const benefits = [
    "Wholesale pricing",
    "Flexible MOQ",
    "Bulk ordering",
    "Business-friendly solutions",
];

const WholesaleCTA = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
            {/* Background Glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="absolute -right-40 top-0 size-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />
                <div className="absolute left-1/2 top-1/2 size-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
            </div>

            {/* Grid Pattern */}
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <Container maxWidth="2xl" className="relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm sm:p-8 lg:p-12"
                >
                    {/* Decorative Orb */}
                    <div
                        aria-hidden="true"
                        className="absolute -right-24 -top-24 size-72 rounded-full border border-cyan-400/10"
                    />

                    <div
                        aria-hidden="true"
                        className="absolute -bottom-32 -left-20 size-80 rounded-full border border-blue-500/10"
                    />

                    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                        {/* Left Content */}
                        <div className="relative">
                            {/* Eyebrow */}
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                                <Building2 className="size-3.5" />
                                XWrap Wholesale
                            </div>

                            {/* Heading */}
                            <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                                Ready to grow your{" "}
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                                    skin & lamination
                                </span>{" "}
                                business?
                            </h2>

                            {/* Description */}
                            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                                Get premium products, wholesale pricing and professional
                                solutions tailored to your business requirements.
                            </p>

                            {/* Benefits */}
                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                {benefits.map((benefit) => (
                                    <div
                                        key={benefit}
                                        className="flex items-center gap-2.5 text-sm text-slate-200"
                                    >
                                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                                            <Check className="size-3" />
                                        </span>

                                        {benefit}
                                    </div>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <Button
                                    size="lg"
                                    className="group h-11 rounded-xl bg-white px-5 text-slate-950 hover:bg-slate-100"
                                    nativeButton={false}
                                    render={<Link href="/wholesale" />}
                                >
                                    Get Wholesale Quote
                                    <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-11 rounded-xl border-white/15 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
                                    nativeButton={false}
                                    render={
                                        <a
                                            href="https://wa.me/91XXXXXXXXXX"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    }
                                >
                                    <MessageCircle className="mr-2 size-4" />
                                    Chat on WhatsApp
                                </Button>

                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="h-11 rounded-xl px-5 text-slate-300 hover:bg-white/5 hover:text-white"
                                    nativeButton={false}
                                    render={<a href="tel:+91XXXXXXXXXX" />}
                                >
                                    <Phone className="mr-2 size-4" />
                                    Call Now
                                </Button>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/10 via-slate-900 to-cyan-500/10 p-5 sm:p-7">
                                {/* Glow */}
                                <div className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                                {/* Main Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.15 }}
                                    className="absolute left-5 right-5 top-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md sm:left-7 sm:right-7 sm:top-7"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                                                <Package className="size-5" />
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    Wholesale Order
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    Business pricing
                                                </p>
                                            </div>
                                        </div>

                                        <TrendingUp className="size-5 text-cyan-300" />
                                    </div>

                                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "78%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                        />
                                    </div>

                                    <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                                        <span>Order progress</span>
                                        <span>78%</span>
                                    </div>
                                </motion.div>

                                {/* Floating Card 1 */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.35 }}
                                    className="absolute bottom-24 left-5 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:left-7"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                                            <Check className="size-4" />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold text-white">
                                                Bulk Pricing
                                            </p>

                                            <p className="text-[10px] text-slate-400">
                                                Available
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Card 2 */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="absolute bottom-7 right-5 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:right-7"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                                            <Sparkles className="size-4" />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold text-white">
                                                MOQ Support
                                            </p>

                                            <p className="text-[10px] text-slate-400">
                                                Flexible ordering
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default WholesaleCTA;
