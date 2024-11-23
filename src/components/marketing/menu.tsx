"use client";

import { 
    NavigationMenu, 
    NavigationMenuContent, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList, 
    NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { CalendarRangeIcon, CircleHelp, HashIcon, Newspaper, UsersIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Icons from "../global/icons";

interface Props {
    title: string;
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Item 1: How it works */}
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md w-max bg-transparent  hover:text-primary dark:hover:text-accent-foreground">
                            How it works
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                {/* Item 2: Features */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-normal  hover:text-primary dark:hover:text-accent-foreground">
                        Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none  dark:from-accent dark:to-accent/50 focus:shadow-md"
                                    >
                                        <Icons.icon className="w-6 h-6" />
                                        <div className="my-2 text-lg font-normal">
                                            Luro AI
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Your ultimate social media management tool
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Item title="Content Calendar" href="/features/content-calendar" icon={<CalendarRangeIcon className="w-5 h-5" />}>
                                Plan and visualize your content strategy.
                            </Item>
                            <Item title="Hashtag Manager" href="/features/hashtag-manager" icon={<HashIcon className="w-5 h-5" />}>
                                Research and track trending hashtags.
                            </Item>
                            <Item title="Competitor Analysis" href="/features/competitor-analysis" icon={<UsersIcon className="w-5 h-5" />}>
                                Monitor and analyze competitor performance.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Item 3: Pricing */}
                <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md bg-transparent  hover:text-primary dark:hover:text-accent-foreground">
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                {/* Item 4: Integrations */}
                <NavigationMenuItem>
                    <Link href="/integrations" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md bg-transparent  hover:text-primary dark:hover:text-accent-foreground">
                            Integrations
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                {/* Item 5: Resources */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-normal  hover:text-primary dark:hover:text-accent-foreground">
                        Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[500px]">
                            <Item title="Blog" href="/resources/blog" icon={<Newspaper className="w-5 h-5" />}>
                                Read our latest articles and updates.
                            </Item>
                            <Item title="Support" href="/resources/support" icon={<CircleHelp className="w-5 h-5" />}>
                                Get help with any issues you may have.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    passHref
                    href={href}
                    {...props}
                    className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none  hover:text-primary dark:hover:bg-accent/50 dark:hover:text-accent-foreground group"
                >
                    <div className="flex items-center justify-center p-1 w-8 h-8 rounded-md border border-gray-300 dark:border-border/80">
                        {icon}
                    </div>
                    <div className="text-start ml-3">
                        <span className="text-sm font-normal leading-none text-muted-foreground dark:text-foreground">
                            {title}
                        </span>
                        <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground dark:text-muted-foreground/70">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
};

Item.displayName = "Item";

export default Menu;
