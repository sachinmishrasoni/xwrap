"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    Heart,
    ShoppingCart,
    Sparkles,
    Star,
} from "lucide-react";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

const featuredProducts = [
    {
        id: 1,
        name: "Midnight Black Skin",
        category: "Mobile Skin",
        price: "₹499",
        originalPrice: "₹699",
        rating: 4.9,
        reviews: 128,
        image:
            "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&w=900&q=80",
        badge: "Best Seller",
    },
    {
        id: 2,
        name: "Carbon Fiber Pro",
        category: "Laptop Skin",
        price: "₹899",
        originalPrice: "₹1,199",
        rating: 4.8,
        reviews: 94,
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
        badge: "Popular",
    },
    {
        id: 3,
        name: "Aurora Purple",
        category: "Mobile Skin",
        price: "₹599",
        originalPrice: "₹799",
        rating: 4.9,
        reviews: 76,
        image:
            "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=900&q=80",
        badge: "New",
    },
    {
        id: 4,
        name: "Matte Black Finish",
        category: "Tablet Skin",
        price: "₹749",
        originalPrice: "₹999",
        rating: 4.7,
        reviews: 61,
        image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
        badge: "Featured",
    },
];

const FeaturedProducts = () => {
    return (
        <section className="relative overflow-hidden bg-muted/30 py-16 sm:py-20 lg:py-24">
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute -left-40 top-20 size-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -right-40 bottom-20 size-96 rounded-full bg-secondary/5 blur-3xl" />
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
                            Curated for You
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Featured{" "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-clip-text text-transparent">
                                products
                            </span>
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                            Explore some of our most popular premium skins and
                            device protection solutions.
                        </p>
                    </div>

                    <Link
                        href="/products"
                        className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
                    >
                        View all products
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Products */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredProducts.map((product, index) => (
                        <motion.article
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.07,
                            }}
                            className="group"
                        >
                            <div className="relative h-full overflow-hidden rounded-3xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden bg-muted">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Image overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Badge */}
                                    <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold text-foreground shadow-sm backdrop-blur-sm">
                                        {product.badge}
                                    </div>

                                    {/* Wishlist */}
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="absolute right-4 top-4 rounded-full border-0 bg-background/90 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                                        aria-label={`Add ${product.name} to wishlist`}
                                    >
                                        <Heart className="size-4" />
                                    </Button>

                                    {/* Quick Add */}
                                    <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <Button
                                            className="h-10 w-full rounded-xl shadow-lg"
                                        >
                                            <ShoppingCart className="mr-2 size-4" />
                                            Quick Add
                                        </Button>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-xs font-medium text-muted-foreground">
                                            {product.category}
                                        </p>

                                        <div className="flex items-center gap-1 text-xs font-medium">
                                            <Star className="size-3.5 fill-current text-amber-500" />
                                            {product.rating}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/products/${product.id}`}
                                        className="mt-2 block"
                                    >
                                        <h3 className="line-clamp-1 text-base font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-lg">
                                            {product.name}
                                        </h3>
                                    </Link>

                                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                                        <span>{product.reviews} reviews</span>
                                    </div>

                                    <div className="mt-4 flex items-end justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold">
                                                {product.price}
                                            </span>

                                            <span className="text-xs text-muted-foreground line-through">
                                                {product.originalPrice}
                                            </span>
                                        </div>

                                        <Link
                                            href={`/products/${product.id}`}
                                            className="flex size-9 items-center justify-center rounded-full border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                            aria-label={`View ${product.name}`}
                                        >
                                            <ArrowUpRight className="size-4" />
                                        </Link>
                                    </div>
                                </div>
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
                    className="mt-8 flex justify-center"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="group rounded-xl"
                        nativeButton={false}
                        render={<Link href="/products" />}
                    >
                        Explore All Products
                        <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
};

export default FeaturedProducts;
