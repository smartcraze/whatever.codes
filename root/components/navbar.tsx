import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import Image from "next/image";
import { title } from "process";

export const NAVLINKS = [
  {
    title: "docs",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "ui",
    href: "/ui",
  },
];

export function Navbar() {
  return (
    <nav className="w-full h-16 sticky top-0 z-50 border-b border-border backdrop-blur-md bg-background/70 shadow-md">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-6">
          <SheetLeftbar />
          <div className="hidden sm:flex items-center gap-6">
            <Logo />
            <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        {/* Right Section: Search + Icons */}
        <div className="flex items-center gap-4">
          <Search />
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/smartcraze"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
            </Link>
            <Link
              href="#"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="text-lg font-semibold flex items-center gap-2 text-primary">
      <Image src="/logo.png" alt="logo" width={32} height={32} className="dark:invert"/>
      <h1>Whatever</h1>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary md:font-semibold font-medium"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}