"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type AuthMode = "login" | "signup";

interface AuthModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const AuthModal = ({
    open,
    onOpenChange,
}: AuthModalProps) => {
    const [mode, setMode] = useState<AuthMode>("login");

    const handleClose = (open: boolean) => {
        onOpenChange(open);

        if (!open) {
            // Reset to login whenever modal is closed
            setMode("login");
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="overflow-hidden p-0 sm:max-w-[900px]">
                <div className="grid min-h-[520px] md:grid-cols-2">
                    {/* Left Branding Section */}
                    <div className="relative hidden overflow-hidden bg-primary p-8 text-primary-foreground md:flex md:flex-col md:justify-between">
                        {/* Decorative shapes */}
                        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />

                        <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-white/10" />

                        {/* Brand */}
                        <div className="relative">
                            <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-white/15 text-lg font-bold backdrop-blur">
                                X
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight">
                                XWrap
                            </h2>

                            <p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/75">
                                Your trusted destination for quality products,
                                seamless shopping, and a better buying experience.
                            </p>
                        </div>

                        {/* Bottom */}
                        <div className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                                <ShieldCheck className="size-4" />
                            </div>

                            <div>
                                <p className="text-sm font-medium">
                                    Secure & trusted
                                </p>

                                <p className="text-xs text-primary-foreground/65">
                                    Your information is protected.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="flex items-center p-6 sm:p-8">
                        <div className="w-full">
                            {mode === "login" ? (
                                <LoginForm
                                    onSignup={() => setMode("signup")}
                                />
                            ) : (
                                <SignupForm
                                    onLogin={() => setMode("login")}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AuthModal;
