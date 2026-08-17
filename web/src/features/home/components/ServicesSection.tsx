"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    Brush,
    Cog,
    Layers3,
    PackageCheck,
    Scissors,
    Sparkles,
} from "lucide-react";

import Container from "@/components/common/Container";

const services = [
    {
        title: "Skin Installation",
        description:
            "Professional installation solutions for a clean, precise and seamless finish.",
        href: "/services/skin-installation",
        icon: Scissors,
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
        iconBg: "bg-blue-500/10 text-blue-600",
    },
    {
        title: "Custom Skin",
        description:
            "Create unique finishes with customized designs made around your requirements.",
        href: "/services/custom-skin",
        icon: Brush,
        gradient: "from-violet-500/15 via-purple-500/10 to-transparent",
        iconBg: "bg-violet-500/10 text-violet-600",
    },
    {
        title: "Wholesale Supply",
        description:
            "Business-friendly supply solutions for retailers, resellers and growing businesses.",
        href: "/wholesale",
        icon: PackageCheck,
        gradient: "from-emerald-500/15 via-green-500/10 to-transparent",
        iconBg: "bg-emerald-500/10 text-emerald-600",
    },
    {
        title: "Lamination Solutions",
        description:
            "Professional lamination materials and solutions for consistent quality and finish.",
        href: "/services/lamination",
        icon: Layers3,
        gradient: "from-orange-500/15 via-amber-500/10 to-transparent",
        iconBg: "bg-orange-500/10 text-orange-600",
    },
    {
        title: "Plotter Machines",
        description:
            "Professional equipment for accurate cutting and efficient skin production.",
        href: "/products/machines",
        icon: Cog,
        gradient: "from-cyan-500/15 via-sky-500/10 to-transparent",
        iconBg: "bg-cyan-500/10 text-cyan-600",
    },
    {
        title: "Bulk Orders",
        description:
            "Flexible bulk ordering options designed for larger business requirements.",
        href: "/wholesale",
        icon: PackageCheck,
        gradient: "from-pink-500/15 via-rose-500/10 to-transparent",
        iconBg: "bg-pink-500/10 text-pink-600",
    },
];

const ServicesSection = () => {
    return (
        <section className="relative overflow-hidden bg-muted/30 py-16 sm:py-20 lg:py-24">
            {/* Background decoration */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-1/4 size-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <Container maxWidth="2xl" className="relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 max-w-2xl sm:mb-12"
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />
                        XWrap Solutions
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        More than just{" "}
                        <span className="bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-clip-text text-transparent">
                            premium skins
                        </span>
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                        From professional installation to wholesale supply, XWrap
                        provides complete solutions for individuals and businesses.
                    </p>
                </motion.div>

                {/* Services */}
                <div className="grid gap-4 lg:grid-cols-12">
                    {/* Featured Service */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5"
                    >
                        <Link
                            href={services[0].href}
                            className="group block h-full touch-manipulation"
                        >
                            <div className="relative flex h-full min-h-[360px] overflow-hidden rounded-3xl border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.99] sm:p-8 lg:min-h-[470px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                                <div className="absolute -right-20 -top-20 size-64 rounded-full border border-primary/10 transition-transform duration-700 group-hover:scale-110" />

                                <div className="absolute -bottom-24 -right-10 size-64 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/15" />

                                <div className="relative flex w-full flex-col">
                                    <div className="flex items-start justify-between">
                                        <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
                                            <Scissors className="size-7" />
                                        </div>

                                        <div className="flex size-10 items-center justify-center rounded-full border bg-background/70 text-muted-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground group-active:border-primary/20 group-active:bg-primary group-active:text-primary-foreground">
                                            <ArrowUpRight className="size-4" />
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-20">
                                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                            Professional Service
                                        </span>

                                        <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                                            Skin Installation
                                        </h3>

                                        <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                                            Professional installation solutions for a clean,
                                            precise and seamless finish.
                                        </p>

                                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                            Explore service
                                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Other Services */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                        {services.slice(1).map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.06,
                                    }}
                                >
                                    <Link
                                        href={service.href}
                                        className="group block h-full touch-manipulation"
                                    >
                                        <div className="relative h-full min-h-[220px] overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]">
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                                            />

                                            <div className="absolute -bottom-14 -right-10 size-36 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />

                                            <div className="relative flex h-full flex-col">
                                                <div className="flex items-start justify-between">
                                                    <div
                                                        className={`flex size-11 items-center justify-center rounded-xl ${service.iconBg} transition-transform duration-300 group-hover:scale-105 group-active:scale-95`}
                                                    >
                                                        <Icon className="size-5" />
                                                    </div>

                                                    <div className="flex size-8 items-center justify-center rounded-full border bg-background/70 text-muted-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground group-active:border-primary/20 group-active:bg-primary group-active:text-primary-foreground">
                                                        <ArrowUpRight className="size-3.5" />
                                                    </div>
                                                </div>

                                                <div className="mt-auto pt-10">
                                                    <h3 className="text-lg font-semibold tracking-tight">
                                                        {service.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-5 text-muted-foreground">
                                                        {service.description}
                                                    </p>

                                                    <div className="mt-4 text-xs font-semibold text-primary sm:translate-y-1 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                                                        Learn more
                                                        <ArrowRight className="ml-1 inline size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border bg-card/70 p-5 sm:flex-row sm:p-6"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Sparkles className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold">
                                Looking for a custom business solution?
                            </p>

                            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                                Talk to our team about your specific requirements.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
                    >
                        Talk to us
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
};

export default ServicesSection;
