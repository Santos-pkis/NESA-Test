import DashboardNavbar from "@/components/Layout/Dashboard/Navbar/page";
import { ReactNode } from "react";

const Layout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <>
      <DashboardNavbar />
    </>
  );
};

export default Layout;
