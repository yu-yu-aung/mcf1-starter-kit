'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Brand Logo</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/home"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Menu
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              Contact
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Profile
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
