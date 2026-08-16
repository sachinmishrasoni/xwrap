"use client";

import { useState } from "react";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignupFormProps {
    onLogin: () => void;
}

const SignupForm = ({ onLogin }: SignupFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    return (
        <div className="space-y-6">
            {/* Heading */}
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Create your account
                </h2>

                <p className="text-sm text-muted-foreground">
                    Join XWrap and start shopping your favorite products.
                </p>
            </div>

            <form className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                    <Label htmlFor="signup-name">Full name</Label>

                    <div className="relative">
                        <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="signup-name"
                            type="text"
                            placeholder="John Doe"
                            className="h-11 pl-10"
                            autoComplete="name"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="signup-email">Email address</Label>

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="signup-email"
                            type="email"
                            placeholder="you@example.com"
                            className="h-11 pl-10"
                            autoComplete="email"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="h-11 pl-10 pr-10"
                            autoComplete="new-password"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            {showPassword ? (
                                <EyeOff className="size-4" />
                            ) : (
                                <Eye className="size-4" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password">
                        Confirm password
                    </Label>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="signup-confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="h-11 pl-10 pr-10"
                            autoComplete="new-password"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword((prev) => !prev)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="size-4" />
                            ) : (
                                <Eye className="size-4" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    className="group h-11 w-full"
                >
                    Create account

                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </form>

            {/* Login */}
            <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <button
                    type="button"
                    onClick={onLogin}
                    className="font-semibold text-primary hover:underline"
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default SignupForm;
