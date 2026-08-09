"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    Search,
    ShoppingCart,
    User,
    ChevronDown,
} from "lucide-react";
import AppLogo from "./AppLogo";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                {/* <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                        X
                    </div>

                    <span className="text-xl font-bold tracking-tight">
                        XWrap
                    </span>
                </Link> */}
                <AppLogo />

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                        Home
                    </Link>

                    <Link
                        href="/products"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Products
                    </Link>

                    <Link
                        href="/categories"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Categories
                    </Link>

                    <Link
                        href="/wholesale"
                        className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Wholesale
                        <ChevronDown className="h-3.5 w-3.5" />
                    </Link>

                    <Link
                        href="/about"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        About
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-2 md:flex">
                    <button
                        type="button"
                        aria-label="Search"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        <Search className="h-5 w-5" />
                    </button>

                    <Link
                        href="/cart"
                        aria-label="Shopping cart"
                        className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        <ShoppingCart className="h-5 w-5" />

                        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                            0
                        </span>
                    </Link>

                    <Link
                        href="/login"
                        className="ml-2 inline-flex h-9 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors hover:bg-muted"
                    >
                        <User className="h-4 w-4" />
                        Login
                    </Link>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-1 md:hidden">
                    <Link
                        href="/cart"
                        aria-label="Shopping cart"
                        className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                        <ShoppingCart className="h-5 w-5" />

                        <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                            0
                        </span>
                    </Link>

                    <button
                        type="button"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="border-t bg-background md:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                        >
                            Home
                        </Link>

                        <Link
                            href="/products"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                        >
                            Products
                        </Link>

                        <Link
                            href="/categories"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                        >
                            Categories
                        </Link>

                        <Link
                            href="/wholesale"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                        >
                            Wholesale
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                        >
                            About
                        </Link>

                        <div className="mt-2 border-t pt-3">
                            <Link
                                href="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                            >
                                <User className="h-4 w-4" />
                                Login
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
