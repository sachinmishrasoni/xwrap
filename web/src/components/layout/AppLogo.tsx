"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const devices = ["Mobile", "Laptop", "Tablet"];

const AppLogo: React.FC = () => {
    const [currentDevice, setCurrentDevice] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDevice((prev) => (prev + 1) % devices.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Link href="/" className="inline-flex items-center gap-1">
            {/* Logo */}
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-2xl font-bold text-primary-foreground">
                X
            </div>

            {/* Brand */}
            <div>
                <h1 className="text-xl font-bold tracking-tight leading-none uppercase">
                    <span className="text-primary">X</span>Wrap
                </h1>

                <p className="text-xs text-muted-foreground leading-3"><span>Mobile</span> Skins</p>
                {/* <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="relative inline-flex h-4 min-w-[50px] items-center justify-center overflow-hidden rounded-md bg-foreground px-1 py-0 text-background">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={devices[currentDevice]}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{
                                    duration: 0.35,
                                    ease: "easeInOut",
                                }}
                                className="absolute"
                            >
                                {devices[currentDevice]}
                            </motion.span>
                        </AnimatePresence>
                    </span>

                    <span>Skins</span>
                </p> */}
            </div>
        </Link>
    );
};

export default AppLogo;
