
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Type, Globe, Menu, BookOpen, Leaf, Rocket, Palette, Waves, Hourglass } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet.jsx';
import { Button } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils.js';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile navigation sheet when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navigationLinks = [
    { name: 'Home', href: '/', icon: Home, ariaLabel: 'Go to Home page', tabClass: 'nav-tab-home', iconColor: '#FFD700' },
    { name: 'Nature Explorer', href: '/nature-explorer', icon: Leaf, ariaLabel: 'Go to Nature Explorer tool', tabClass: 'nav-tab-nature', iconColor: '#22C55E' },
    { name: 'Space Adventure', href: '/space-adventure', icon: Rocket, ariaLabel: 'Go to Space Adventure', tabClass: 'nav-tab-space', iconColor: '#8B5CF6' },
    { name: 'Ocean Explorer', href: '/ocean-explorer', icon: Waves, ariaLabel: 'Go to Ocean Explorer', tabClass: 'nav-tab-ocean', iconColor: '#00A8E8' },
    { name: 'Time Travelers', href: '/time-travelers', icon: Hourglass, ariaLabel: 'Go to Time Travelers', tabClass: 'nav-tab-time', iconColor: '#D97706' },
    { name: 'Creative Corner', href: '/creative-corner', icon: Palette, ariaLabel: 'Go to Creative Corner', tabClass: 'nav-tab-creative', iconColor: '#E879D9' },
    { name: 'Unscrambler', href: '/unscrambler', icon: Type, ariaLabel: 'Go to Word Unscrambler tool', tabClass: 'nav-tab-unscrambler', iconColor: '#F97316' },
    { name: 'Translator', href: '/translator', icon: Globe, ariaLabel: 'Go to Language Translator tool', tabClass: 'nav-tab-translator', iconColor: '#EC4899' },
    { name: 'Comics', href: '/comics', icon: BookOpen, ariaLabel: 'Go to Comics page', tabClass: 'nav-tab-comics', iconColor: '#06B6D4' },
  ];

  return (
    <header className="global-header">
      <div className="flex h-16 items-center justify-between w-full px-4 md:px-6 max-w-[2000px] mx-auto">
        
        {/* Left Side: Logo & Brand */}
        <div className="flex items-center gap-2">
          <Link to="/" aria-label="Easy Tools For Life Home" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-sm">
              <img 
                src="https://horizons-cdn.hostinger.com/ea2c2799-2d38-4356-964d-505717abe857/ca01d5910adf17edaf291cffc3586d0b.png" 
                alt="Easy Tools For Life Logo" 
                className="w-5 h-5"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground hidden xl:inline-block">
              Easy Tools For Life 🫶
            </span>
          </Link>
        </div>

        {/* Center: Single Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1 overflow-x-auto px-4 hide-scrollbar" aria-label="Main Navigation">
          {navigationLinks.map((link) => {
            const Icon = link.icon;
            // Check if active: exact match for home, or starts with href for subpages
            const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
            
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-label={link.ariaLabel}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  "nav-link text-sm rounded-lg px-3 py-2 whitespace-nowrap transition-colors hover:bg-muted flex items-center gap-2",
                  isActive && "bg-muted font-medium text-foreground",
                  !isActive && "text-muted-foreground hover:text-foreground",
                  link.tabClass
                )}
              >
                <Icon className="w-4 h-4 shrink-0" style={{ color: link.iconColor }} aria-hidden="true" />
                <span className="hidden lg:inline-block">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Mobile Navigation (Sheet) */}
        <div className="md:hidden flex items-center justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <Menu className="w-6 h-6 text-foreground" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] overflow-y-auto">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 pb-8" aria-label="Mobile Navigation">
                {navigationLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                  
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      aria-label={link.ariaLabel}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        "nav-link w-full text-base py-3 rounded-lg px-4 flex items-center gap-3 transition-colors hover:bg-muted",
                        isActive && "bg-muted font-medium text-foreground",
                        !isActive && "text-muted-foreground hover:text-foreground",
                        link.tabClass
                      )}
                    >
                      <Icon className="w-5 h-5 shrink-0" style={{ color: link.iconColor }} aria-hidden="true" />
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
