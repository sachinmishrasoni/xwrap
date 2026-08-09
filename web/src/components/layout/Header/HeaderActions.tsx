"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeaderActions = () => {
    return (
        <div className="hidden items-center gap-2 lg:flex">
            <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />

                {/* <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    0
                </span> */}
            </Button>

            <Button variant="outline">
                <User className="mr-1 h-4 w-4" />
                Login
            </Button>
        </div>
    );
};

export default HeaderActions;
