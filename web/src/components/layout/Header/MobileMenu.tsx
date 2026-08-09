"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/shared/constants/navigation";
import { CgMenuRight } from "react-icons/cg";

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger
                render={<Button variant="outline" size="icon"><CgMenuRight size={24} /></Button>}
            />


            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 px-4">
                    {NAVIGATION.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-md font-medium"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
