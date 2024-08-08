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
      { label: "About NESA-Africa", path: "/about" },
      { label: "About NESA-Africa/Nigeria-2024 Award", path: "/about-nesa" },
      { label: "About Judges", path: "/about-judges" },
    ],
  },

  {
    label: "Awards",
    path: "/awards",
    
    children: [
      { label: "Nomination Process", path: "/nomination" },
      // { label: "Award Dinner", path: "/award-dinner" },
    ],
  },
  {
    label: "Get Involved",
    path: "/getinvolved",
    //children: [
     // { label: "NESA Africa", path: "/nesa-africa" },
     // { label: "NESA 2023", path: "/awards" },
     // { label: "Partners", path: "/partners" },
      // { label: "Voting", path: "/voting" },
     // { label: "Join Us Now", path: "/join-us" },
   // ],
  },
  {
    label: "Media",
    path: "#",
    // path: "/nesa-media",
  },
];
