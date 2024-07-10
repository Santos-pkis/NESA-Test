import { NavLink } from "../types/global";

export const navlinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About Us", path: "/about" },
      { label: "About NESA", path: "/about-nesa" },
      { label: "About Judges", path: "/about-judges" },
    ],
  },

  {
    label: "Awards",
    path: "#",
    // path: "/awards",
    children: [
      { label: "Nomination Process", path: "/categories" },
      { label: "Award Dinner", path: "/award-dinner" },
    ],
  },
  {
    label: "N.E.S.A",
    path: "#",
    // path: "/about",
    children: [
      { label: "NESA Africa", path: "/nesa-africa" },
      { label: "NESA 2023", path: "/awards" },
      { label: "Partners", path: "/partners" },
      // { label: "Voting", path: "/voting" },
      { label: "Join Us Now", path: "/join-us" },
    ],
  },
  {
    label: "Media",
    path: "#",
    // path: "/nesa-media",
  },
];
