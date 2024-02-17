import { NavLink } from "../types/global";

export const navlinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Awards",
    path: "/categories",
    children: [
      { label: "Award Categories", path: "/awards" },
      { label: "Nomination Process", path: "/categories" },
      { label: "Voting", path: "/voting" },
      { label: "Award Dinner", path: "/award-dinner" },
    ],
  },
  {
    label: "N.E.S.A",
    path: "/about",
    children: [
      { label: "NESA Africa", path: "https://nesa.africa/", external: true },
      { label: "NESA 2023", path: "/about" },
      { label: "Partners", path: "/partners" },
      { label: "Get Involved", path: "#" },
      { label: "Join Us Now", path: "/join-us" },
    ],
  },
];
