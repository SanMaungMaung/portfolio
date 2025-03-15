import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, LogIn } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

  return (
    <header className="fixed top-0 w-full z-50 bg-[#CC3333] text-white">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:scale-105 transition-transform">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
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
          <Link 
            href="/admin/login"
            className="ml-4 hover:scale-110 transition-transform flex items-center gap-2 text-sm font-medium"
          >
            <LogIn className="h-5 w-5" />
            <span className="sr-only">Admin Login</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
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