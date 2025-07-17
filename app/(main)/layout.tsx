"use client"
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { usePathname } from "next/navigation";
import { useAuthContext } from '@/lib/context/AuthContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { user } = useAuthContext();

  // Hide Navbar if user is a Volunteer and on ProfileSetting page
  const hideNavbar = pathname === "/ProfileSetting" && user?.role === "Volunteer";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;