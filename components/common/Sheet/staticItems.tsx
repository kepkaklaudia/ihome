import { pathnames } from "@/lib/i18n/navigation";
import { Blocks, Clipboard, Home, Settings } from "lucide-react";

type Path = keyof typeof pathnames;

export interface StaticItem {
  path: Path;
  title:string;
  icon?: React.ReactNode;
  auth?: boolean;
}

export const staticItemsUpper: StaticItem[] = [
  {
    path: "/",
    title: "Home",
    icon: <Home width={20} height={20} />
  },
  {
    path: "/orders",
    title: "Orders",
    icon: <Clipboard width={20} height={20} />,
    auth: true
  },
  {
    path: "/configurator",
    title: "Configurator",
    icon: <Blocks width={20} height={20} />
  }
];

export const staticItemsBottom: StaticItem[] = [
  {
    path: "/settings",
    title: "Settings",
    icon: <Settings width={20} height={20} />,
    auth: true
  }
];
