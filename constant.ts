import { BarChart, CalendarPlus, Home, Settings } from "lucide-react";

export const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Create Event", href: "/dashboard/create-event", icon: CalendarPlus },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];
