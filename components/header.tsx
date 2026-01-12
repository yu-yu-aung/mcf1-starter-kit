"use client";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toogle";
export default function Header() {
  return (
    <header className="sticky top-0 bg-background text-foreground z-10 flex h-16 items-center justify-between border-b px-4 md:px-[5%] mx-auto">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <span className="h-8 w-8 bg-black dark:bg-white dark:text-black text-white rounded-full flex items-center justify-center font-bold">
          M
        </span>
        <span className="">MCF1</span>
      </Link>

      <div className="flex items-center gap-4 md:gap-6">
        <nav className="hidden md:flex items-center justify-between gap-10 text-sm font-medium me-10">
          <Link
            href="/"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground text-nowrap"
          >
            Contact Us
          </Link>
        </nav>
        <Link href="/log-in" className="hidden md:inline-flex">
          <Button
            className="hidden md:inline-flex p-3"
            variant="outline"
            size="lg"
          >
            Sign In
          </Button>
        </Link>
        <Button
          className="hidden md:inline-flex"
          variant="ghost"
          size="icon-lg"
        >
          <User className="h-4 w-4" />
        </Button>
        <ModeToggle />
        <Sheet>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "shrink-0 md:hidden"
            )}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-base font-medium mt-6 p-3">
              <Link href="#" className="flex items-center gap-2  font-semibold">
                <span>MCF1</span>
              </Link>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <Link
                href="/menu"
                className="text-muted-foreground hover:text-foreground"
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact Us
              </Link>
              <Button
                variant="outline"
                className="w-full justify-start text-base font-medium"
              >
                Sign In
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start  text-base font-medium"
              >
                <User className="h-5 w-5" />
                Profile
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
