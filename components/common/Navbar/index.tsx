"use client";
import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { cn } from "@/lib/utils";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const Navbar = () => {
  const MenuLink = ({
    href,
    children,
    border = true,
  }: {
    href: string;
    children: React.ReactNode;
    border?: boolean;
  }) => (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className={cn(
          navigationMenuTriggerStyle(),
          border && "border-r-2 border-zinc-700"
        )}
      >
        <Link href={href}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );

  const ListItem = ({
    title,
    children,
    href,
    ...props
  }: React.ComponentPropsWithoutRef<"li"> & { href: string }) => {
    return (
      <li {...props}>
        <NavigationMenuLink asChild>
          <Link href={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  };

  return (
    <NavigationMenu className="bg-black hidden lg:flex" viewport={false}>
      <NavigationMenuList className="flex justify-between w-11/12 mx-auto">
        <div className="flex">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-r-2 border-zinc-700">
              Sklep
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <MenuLink href="/docs">Realizacje</MenuLink>
          <MenuLink href="/docs">Usługi</MenuLink>
          <MenuLink href="/docs" border={false}>
            Marki
          </MenuLink>
        </div>
        <Link href="/">
          <Image
            src="/ihome-logo-white.png"
            alt="logo"
            className="w-18 h-auto"
            width={48}
            height={10}
          />
        </Link>
        <div className="flex">
          <NavigationMenuItem>
            <div className="flex">
              {" "}
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "border-r-2 border-zinc-700"
                )}
              >
                <div>
                  <Link href="/docs" className="flex gap-1">
                    {" "}
                    <Search
                      width={60}
                      height={60}
                      className="text-white w-4 h-auto mt-0.5"
                    />
                    Szukaj{" "}
                  </Link>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuItem>
          <MenuLink href="/docs">Blog</MenuLink>
          <MenuLink href="/docs">Kontakt</MenuLink>
          <MenuLink href="/docs" border={false}>
            Koszyk
          </MenuLink>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
