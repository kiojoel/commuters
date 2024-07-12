import { BarChart, CalendarPlus, Home, Settings } from "lucide-react";

export const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  {
    name: "Create Event",
    href: "/events/create",
    icon: CalendarPlus,
  },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
