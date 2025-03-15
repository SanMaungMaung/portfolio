import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, LogIn, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";

const links = [
  { href: "#welcome", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#work-experience", label: "Work Experience" },
  { href: "#education", label: "Education" },
  { href: "#about", label: "About Me" },
  { href: "#contact", label: "Contact" }
];

export default function Navigation() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#CC3333] text-white">
      <nav className="container mx-auto px-4 h-16 flex items-center">
        {/* Logo - Left */}
        <Link href="/" className="text-xl font-bold hover:scale-105 transition-transform">
          Portfolio
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium relative group transition-all duration-300 ease-in-out",
                location === link.href && "text-white",
                "hover:text-white/90 hover:scale-105"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Theme Toggle and Admin Login - Right */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-white hover:scale-110 transition-transform"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link 
            href="/admin/login"
            className="hover:scale-110 transition-transform flex items-center gap-2 text-sm font-medium"
          >
            <LogIn className="h-5 w-5" />
            <span className="sr-only">Admin Login</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden ml-auto">
            <Button variant="ghost" size="icon" className="text-white hover:scale-110 transition-transform">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] bg-[#CC3333] text-white">
            <div className="flex flex-col gap-4 mt-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg relative group transition-all duration-300 ease-in-out",
                    location === link.href && "text-white",
                    "hover:text-white/90 hover:translate-x-2"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setOpen(false);
                }}
                className="flex items-center gap-2 justify-start hover:translate-x-2 transition-transform"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                Toggle theme
              </Button>
              <Link
                href="/admin/login"
                className="flex items-center gap-2 hover:translate-x-2 transition-transform"
                onClick={() => setOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                <span>Admin Login</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}