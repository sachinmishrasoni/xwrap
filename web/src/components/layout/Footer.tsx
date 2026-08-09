import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
} from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";
import AppLogo from "./AppLogo";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Wholesale", href: "/wholesale", external: true },
    { label: "About Us", href: "/about" },
];

const supportLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "Shipping & Delivery", href: "/shipping" },
    { label: "Returns & Refunds", href: "/returns" },
    { label: "FAQs", href: "/faq" },
    { label: "Track Order", href: "/track-order" },
];

const socialLinks = [
    {
        label: "Facebook",
        href: "#",
        icon: FaFacebookF,
    },
    {
        label: "Instagram",
        href: "#",
        icon: FaInstagram,
    },
    {
        label: "Twitter",
        href: "#",
        icon: FaTwitter,
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: FaLinkedinIn,
    },
];

const contactDetails = [
    {
        label: "hello@xwrap.com",
        href: "mailto:hello@xwrap.com",
        icon: Mail,
    },
    {
        label: "+91 99999 99999",
        href: "tel:+919999999999",
        icon: Phone,
    },
];

const Footer = () => {
    return (
        <footer className="border-t bg-muted/30">
            <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="space-y-5">
                        <AppLogo />

                        <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                            Premium skins, wraps and lamination solutions for
                            mobile, laptop and other devices.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <FooterLinkSection
                        title="Quick Links"
                        links={quickLinks}
                    />

                    {/* Customer Support */}
                    <FooterLinkSection
                        title="Customer Support"
                        links={supportLinks}
                    />

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold">
                            Get In Touch
                        </h3>

                        <ul className="space-y-4">
                            {contactDetails.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <li key={item.label} className="flex items-start gap-3">
                                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />

                                        <a
                                            href={item.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}

                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />

                                <span className="text-sm leading-5 text-muted-foreground">
                                    New Delhi, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-12 rounded-2xl border bg-background p-6 sm:p-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h3 className="text-lg font-semibold">
                                Stay in the loop
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Get updates about new skins, offers and collections.
                            </p>
                        </div>

                        <form className="flex w-full max-w-md gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="h-10 min-w-0 flex-1 rounded-lg border bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
                            />

                            <button
                                type="submit"
                                className="h-10 shrink-0 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p className="text-center text-xs text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} XWrap. All rights reserved.
                    </p>

                    <div className="flex items-center justify-center gap-5">
                        <Link
                            href="/privacy-policy"
                            className="text-xs text-muted-foreground hover:text-foreground"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-xs text-muted-foreground hover:text-foreground"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

/* -------------------------------- */
/* Reusable Footer Link Section     */
/* -------------------------------- */

type FooterLink = {
    label: string;
    href: string;
    external?: boolean;
};

type FooterLinkSectionProps = {
    title: string;
    links: FooterLink[];
};

const FooterLinkSection = ({
    title,
    links,
}: FooterLinkSectionProps) => {
    return (
        <div>
            <h3 className="mb-5 text-sm font-semibold">
                {title}
            </h3>

            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}

                            {link.external && (
                                <ArrowUpRight className="h-3 w-3" />
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
