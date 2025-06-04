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
      { label: "About NESA-Africa/Nigeria-2025 Award", path: "/about-nesa" },
      { label: "About Judges", path: "/about-judges" },
    ],
  },

  {
    label: "Awards",
    path: "/awards",
    
    children: [
      { label: "Competitive", path: "/competitive" },
      { label: "Non-Competitive", path: "/non-competitive" },
      { label: "Nomination Process", path: "/nomination" },
       { label: "Judge Portal", path: "/judge" },
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
    path: "nesatv",
    // path: "/nesa-media",
  },
];
