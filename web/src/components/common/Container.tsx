import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "xxl" | "full";
    disableGutter?: boolean;
}

const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    xxl: "max-w-[1440px]",
    full: "max-w-full",
};

const Container: React.FC<ContainerProps> = ({
    children,
    className,
    maxWidth = "lg",
    disableGutter = false,
}) => {
    return (
        <div
            className={cn(
                "mx-auto w-full",
                maxWidthClasses[maxWidth],
                !disableGutter && "px-4 sm:px-6 lg:px-8",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
