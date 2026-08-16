"use client";

import { useState } from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import AuthModal from "@/features/auth/components/AuthModal";

const HeaderActions = () => {
    const [authOpen, setAuthOpen] = useState(false);

    return (
        <>
            <div className="hidden items-center gap-2 lg:flex">
                <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                >
                    <ShoppingCart className="h-5 w-5" />
                </Button>

                <Button
                    variant="outline"
                    onClick={() => setAuthOpen(true)}
                >
                    <User className="mr-1 h-4 w-4" />
                    Login
                </Button>
            </div>

            <AuthModal
                open={authOpen}
                onOpenChange={setAuthOpen}
            />
        </>
    );
};

export default HeaderActions;
