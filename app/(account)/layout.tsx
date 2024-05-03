import AccountNavbar from "@/components/UI/Account/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AccountNavbar />
      {children}
    </>
  );
};

export default Layout;
