import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon, Tags, Package } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/app/dashboard",
        label: "Dashboard",
        icon: ChartPieIcon,
    },
    {
        href: "/app/products",
        label: "Estoque",
        icon: Package
    },
    {
        href: "/app/clients",
        label: "Clientes",
        icon: UsersIcon
    },
    {
        href: "/dashboard/billing",
        label: "Billing",
        icon: CreditCardIcon
    },
    {
        href: "/dashboard/settings",
        label: "Settings",
        icon: SettingsIcon
    },
];

export const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            { name: "Home", href: "/" },
            { name: "Features", href: "/" },
            { name: "Pricing", href: "/" },
            { name: "Contact", href: "/" },
            { name: "Download", href: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Help Center", href: "/help-center" },
            { name: "Community", href: "/community" },
            { name: "Guides", href: "/guides" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "/privacy" },
            { name: "Terms", href: "/terms" },
            { name: "Cookies", href: "/cookies" },
        ],
    },
    {
        title: "Developers",
        links: [
            { name: "API Docs", href: "/api-docs" },
            { name: "SDKs", href: "/sdks" },
            { name: "Tools", href: "/tools" },
            { name: "Open Source", href: "/open-source" },
            { name: "Changelog", href: "/changelog" },
        ],
    },
];
