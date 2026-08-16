"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
    onSignup: () => void;
}

const LoginForm = ({ onSignup }: LoginFormProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-6">
            {/* Heading */}
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Welcome back
                </h2>

                <p className="text-sm text-muted-foreground">
                    Sign in to continue to your XWrap account.
                </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="login-email">Email address</Label>

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="login-email"
                            type="email"
                            placeholder="you@example.com"
                            className="h-11 pl-10"
                            autoComplete="email"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>

                        <button
                            type="button"
                            className="text-xs font-medium text-primary hover:underline"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="h-11 pl-10 pr-10"
                            autoComplete="current-password"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={
                                showPassword ? "Hide password" : "Show password"
                            }
                        >
                            {showPassword ? (
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
                    Sign in

                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </form>

            {/* Signup */}
            <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button
                    type="button"
                    onClick={onSignup}
                    className="font-semibold text-primary hover:underline"
                >
                    Create one
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
