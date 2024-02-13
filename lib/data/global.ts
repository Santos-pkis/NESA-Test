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
      { label: "Awards", path: "/awards" },
      { label: "Categories", path: "/categories" },
      { label: "Nomination Process", path: "/nomination" },
      { label: "Voting", path: "/voting" },
    ],
  },
  // {
  //   label: "Media",
  //   path: "/media",
  //   children: [
  //     { label: "News and Stories", path: "/news" },
  //     { label: "NESA Award Dinner", path: "/award-dinner" },
  //     { label: "Video and Photo Gallery", path: "/gallery" },
  //     { label: "Live Events", path: "/events" },
  //   ],
  // },
  {
    label: "N.E.S.A",
    path: "/about",
    children: [
      { label: "About NESA", path: "/about" },
      { label: "Partners", path: "/partners" },
      { label: "Quarterly Intervention Programme", path: "/intervention-programme" },
    ],
  },
];
