"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    Quote,
    ShieldCheck,
    Sparkles,
    Star,
} from "lucide-react";

import Container from "@/components/common/Container";

const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Mobile Accessories Retailer",
        initials: "RS",
        rating: 5,
        review:
            "The skin quality is excellent and the finish looks premium. The ordering experience was simple and the products arrived well packed.",
    },
    {
        id: 2,
        name: "Amit Verma",
        role: "Device Customization Studio",
        initials: "AV",
        rating: 5,
        review:
            "XWrap has made it much easier for us to source skins and lamination materials. The product range is especially useful for our business.",
    },
    {
        id: 3,
        name: "Priya Singh",
        role: "Online Seller",
        initials: "PS",
        rating: 5,
        review:
            "I really liked the quality and variety of the skins. The customization options make it easy to offer something different to customers.",
    },
    {
        id: 4,
        name: "Karan Mehta",
        role: "Wholesale Buyer",
        initials: "KM",
        rating: 5,
        review:
            "The wholesale ordering process is straightforward and the products are suitable for regular business requirements. Great overall experience.",
    },
];

const Testimonials = () => {
    return (
        <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
            {/* Background */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-1/3 size-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <Container maxWidth="2xl" className="relative">
                {/* Header */}
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
                            Customer Stories
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Loved by{" "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-clip-text text-transparent">
                                XWrap customers
                            </span>
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                            See what customers and business buyers have to say about
                            their experience with XWrap.
                        </p>
                    </div>

                    <Link
                        href="/reviews"
                        className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
                    >
                        View all reviews
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Testimonials */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.07,
                            }}
                            className="group"
                        >
                            <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.99] sm:p-7">
                                {/* Quote */}
                                <div className="absolute right-5 top-5 text-primary/10 transition-transform duration-500 group-hover:scale-110">
                                    <Quote className="size-12 fill-current" />
                                </div>

                                {/* Rating */}
                                <div className="relative flex items-center gap-1">
                                    {Array.from({ length: testimonial.rating }).map(
                                        (_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                className="size-4 fill-current text-amber-500"
                                            />
                                        )
                                    )}
                                </div>

                                {/* Review */}
                                <blockquote className="relative mt-6 flex-1 text-sm leading-6 text-foreground/80">
                                    “{testimonial.review}”
                                </blockquote>

                                {/* Customer */}
                                <div className="mt-7 flex items-center gap-3 border-t pt-5">
                                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 text-sm font-bold text-primary">
                                        {testimonial.initials}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold">
                                            {testimonial.name}
                                        </p>

                                        <p className="truncate text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>

                                    <ShieldCheck className="ml-auto size-4 shrink-0 text-emerald-500" />
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary via-secondary to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border bg-muted/30 p-5 sm:flex-row sm:p-6"
                >
                    <div>
                        <p className="text-sm font-semibold">
                            Have an experience to share?
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                            Your feedback helps other customers make better decisions.
                        </p>
                    </div>

                    <Link
                        href="/reviews"
                        className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
                    >
                        Read customer reviews
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
};

export default Testimonials;
