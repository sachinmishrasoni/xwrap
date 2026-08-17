"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    CreditCard,
    MapPin,
    Package,
    Search,
    ShoppingCart,
    Sparkles,
    Truck,
} from "lucide-react";

import Container from "@/components/common/Container";

const steps = [
    {
        number: "01",
        title: "Discover",
        description:
            "Browse premium skins, lamination products and solutions designed for your device or business.",
        icon: Search,
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        number: "02",
        title: "Add to Cart",
        description:
            "Choose your product and variant, select the quantity and add everything you need to your cart.",
        icon: ShoppingCart,
        color: "bg-violet-500/10 text-violet-600",
    },
    {
        number: "03",
        title: "Checkout & Pay",
        description:
            "Enter your delivery address, review your order and complete your payment securely.",
        icon: CreditCard,
        color: "bg-emerald-500/10 text-emerald-600",
    },
    {
        number: "04",
        title: "Track Your Order",
        description:
            "Once your order is confirmed, follow its progress from processing and packing to delivery.",
        icon: Truck,
        color: "bg-orange-500/10 text-orange-600",
    },
];

const checkoutSteps = [
    {
        label: "Address",
        icon: MapPin,
    },
    {
        label: "Shipping",
        icon: Truck,
    },
    {
        label: "Payment",
        icon: CreditCard,
    },
    {
        label: "Confirmation",
        icon: CheckCircle2,
    },
];

const HowItWorks = () => {
    return (
        <section className="relative overflow-hidden bg-muted/30 py-16 sm:py-20 lg:py-24">
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
                    className="mx-auto mb-12 max-w-2xl text-center lg:mb-16"
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />
                        Simple Shopping Experience
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        From{" "}
                        <span className="bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-clip-text text-transparent">
                            browse to delivery
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                        Getting your perfect skin or business order is simple.
                        Find what you need, place your order and let XWrap take
                        care of the rest.
                    </p>
                </motion.div>

                {/* Main Steps */}
                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div
                        aria-hidden="true"
                        className="absolute left-[12%] right-[12%] top-[42px] hidden h-px bg-gradient-to-r from-blue-500/20 via-primary/30 to-orange-500/20 lg:block"
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.08,
                                    }}
                                    className="group relative"
                                >
                                    <div className="relative h-full rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.99] sm:p-7">
                                        {/* Number + Icon */}
                                        <div className="relative flex items-center justify-between">
                                            <div
                                                className={`flex size-[52px] items-center justify-center rounded-2xl ${step.color} bg-background ring-8 ring-muted/30 transition-transform duration-300 group-hover:scale-105 group-active:scale-95`}
                                            >
                                                <Icon className="size-6" />
                                            </div>

                                            <span className="text-4xl font-bold tracking-tighter text-muted-foreground/10 transition-colors duration-300 group-hover:text-primary/10">
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="mt-6">
                                            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                                                {step.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        {index < steps.length - 1 && (
                                            <div className="absolute -bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
                                                <div className="flex size-7 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm">
                                                    <ArrowRight className="size-3.5" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Mobile arrow */}
                                        {index < steps.length - 1 && (
                                            <div className="absolute -bottom-5 left-1/2 z-10 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm sm:hidden">
                                                <ArrowRight className="size-3.5 rotate-90" />
                                            </div>
                                        )}

                                        {/* Bottom Accent */}
                                        <div className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary via-secondary to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Checkout Flow */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-12 overflow-hidden rounded-3xl border bg-card shadow-sm lg:mt-16"
                >
                    <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                        {/* Left */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary p-7 text-primary-foreground sm:p-8 lg:p-10">
                            <div className="absolute -right-20 -top-20 size-48 rounded-full border border-white/10" />

                            <div className="absolute -bottom-24 -left-10 size-56 rounded-full bg-white/10 blur-3xl" />

                            <div className="relative">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-white/10">
                                    <Package className="size-6" />
                                </div>

                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                                    Checkout Journey
                                </p>

                                <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                                    Everything you need,
                                    <br />
                                    in one smooth flow.
                                </h3>

                                <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
                                    Review your order, provide delivery details and
                                    complete payment before your order moves into
                                    processing.
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="p-7 sm:p-8 lg:p-10">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {checkoutSteps.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.label}
                                            className="relative flex items-center gap-3 lg:block"
                                        >
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <Icon className="size-4.5" />
                                            </div>

                                            <div className="lg:mt-4">
                                                <span className="text-[11px] font-semibold text-muted-foreground">
                                                    STEP {index + 1}
                                                </span>

                                                <p className="mt-0.5 text-sm font-semibold">
                                                    {item.label}
                                                </p>
                                            </div>

                                            {index < checkoutSteps.length - 1 && (
                                                <ArrowRight className="absolute right-0 hidden size-4 text-border lg:block" />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 border-t pt-6">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm font-semibold">
                                            Ready to find your perfect skin?
                                        </p>

                                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                                            Explore our collection and start shopping.
                                        </p>
                                    </div>

                                    <Link
                                        href="/products"
                                        className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
                                    >
                                        Start shopping
                                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default HowItWorks;
