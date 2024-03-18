import { NavLink } from "../types/global";

export const navlinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "Awards",
    path: "/awards",
    children: [
      { label: "About NESA", path: "/awards" },
      { label: "Nomination Process", path: "/categories" },
      { label: "Award Dinner", path: "/award-dinner" },
    ],
  },
  {
    label: "N.E.S.A",
    path: "/about",
    children: [
      { label: "NESA Africa", path: "/nesa-africa" },
      { label: "NESA 2023", path: "/about" },
      { label: "Partners", path: "/partners" },
      { label: "Voting", path: "/voting" },
      { label: "Join Us Now", path: "/join-us" },
    ],
  },
  {
    label: "Media",
    path: "/nesa-media",
  },
];
