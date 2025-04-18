'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/components/Layout/Footer";
import { IoNotificationsOutline, IoSettingsOutline, IoWalletOutline, IoShirtOutline, IoVideocamOutline, IoDocumentTextOutline, IoCalendarOutline, IoStarOutline, IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import { useAuthContext } from '@/lib/context/AuthContext';

// Types
interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  subItems?: MenuItem[];
  isHighlighted?: boolean;
}

interface MemberLayoutProps {
  children: React.ReactNode;
}

// Menu Configuration - Centralized and maintainable
const mainMenuConfig: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/member",
    icon: <IoSettingsOutline className="h-5 w-5" />,
    isHighlighted: true
  },
  {
    label: "Vote",
    href: "/member/vote",
    icon: <IoStarOutline className="h-5 w-5" />
  },
  {
    label: "Nominate",
    href: "/nomination",
    icon: <IoPersonOutline className="h-5 w-5" />
  },
  {
    label: "NESA TV",
    icon: <IoVideocamOutline className="h-5 w-5" />,
    subItems: [
      {
        label: "Award Videos",
        href: "/member/nesa-tv/awards",
        icon: <IoDocumentTextOutline className="h-4 w-4" />
      },
      {
        label: "Documentaries",
        href: "/member/nesa-tv/documentaries",
        icon: <IoVideocamOutline className="h-4 w-4" />
      },
      {
        label: "Live Events",
        href: "/member/nesa-tv/live",
        icon: <IoCalendarOutline className="h-4 w-4" />
      }
    ]
  },
  {
    label: "Shop",
    icon: <IoShirtOutline className="h-5 w-5" />,
    subItems: [
      {
        label: "Award Tickets",
        href: "/member/shop/tickets",
        icon: <IoDocumentTextOutline className="h-4 w-4" />
      },
      {
        label: "Merchandise",
        href: "/member/shop/merchandise",
        icon: <IoShirtOutline className="h-4 w-4" />
      },
      {
        label: "VIP Packages",
        href: "/member/shop/vip",
        icon: <IoStarOutline className="h-4 w-4" />
      }
    ]
  }
];

const notificationItems = [
  {
    label: "New nomination",
    href: "/member/notifications",
    icon: <IoPersonOutline className="h-4 w-4" />
  },
  {
    label: "Payment confirmed",
    href: "/member/notifications",
    icon: <IoWalletOutline className="h-4 w-4" />
  },
  {
    label: "Event reminder",
    href: "/member/notifications",
    icon: <IoCalendarOutline className="h-4 w-4" />
  }
];

const profileItems = [
  {
    label: "My Profile",
    href: "/member/profile",
    icon: <IoPersonOutline className="h-4 w-4" />
  },
  {
    label: "Account Settings",
    href: "/member/settings",
    icon: <IoSettingsOutline className="h-4 w-4" />
  },
  {
    label: "Wallet",
    href: "/member/wallet",
    icon: <IoWalletOutline className="h-4 w-4" />
  },
  {
    label: "Referrals",
    href: "/member/referrals",
    icon: <IoPersonOutline className="h-4 w-4" />
  },
  {
    label: "Upgrade Account",
    href: "/member/upgrade",
    icon: <IoStarOutline className="h-4 w-4" />
  },
  {
    label: "Support",
    href: "/member/support",
    icon: <IoDocumentTextOutline className="h-4 w-4" />
  },
  {
    label: "Logout",
    onClick: () => console.log("Logging out..."),
    icon: <IoLogOutOutline className="h-4 w-4" />
  }
];

// Wallet Info Component
// Wallet Info Component
const WalletInfo = () => (
  <div className="flex items-center space-x-4 bg-[#191307E6] rounded-lg px-6 py-4 shadow-md">
    {/* Wallet Icon */}
    <div className="flex items-center justify-center bg-[#f6b146] text-[#191307] rounded-full w-10 h-10">
      <IoWalletOutline size={20} />
    </div>

    {/* Balance Info */}
    <div className="text-left">
      <p className="text-sm font-medium text-gray-300">Balance</p>
      <p className="text-lg font-bold text-[#f6b146]">1250 Points</p>
    </div>

  </div>
);

// Navigation Item Component
const NavItem = ({ item, mobile = false }: { item: MenuItem; mobile?: boolean }) => {
  const baseClasses = "flex items-center py-2 px-4 rounded-lg transition-colors whitespace-nowrap";
  const mobileClasses = mobile ? "block w-full text-center mb-2" : "";
  const highlightedClasses = item.isHighlighted ? "bg-[#f6b146] text-[#191307]" : "hover:bg-[#f6b146] hover:text-[#191307]";

  return (
    <Link
      href={item.href || "#"}
      className={`${baseClasses} ${mobileClasses} ${highlightedClasses}`}
    >
      {item.icon && <span className="mr-2">{item.icon}</span>}
      {item.label}
    </Link>
  );
};

// Dropdown Component
const NavDropdown = ({ item, mobile = false }: { item: MenuItem; mobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${mobile ? 'w-full' : ''}`} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center py-2 px-4 rounded-lg transition-colors ${mobile ? 'w-full justify-center' : ''} hover:bg-[#f6b146] hover:text-[#191307] whitespace-nowrap`}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.label} <RiArrowDropDownLine className="ml-1" />
      </button>
      {isOpen && (
        <div className={`${mobile ? 'relative' : 'absolute right-0'} bg-[#191307E6] p-2 rounded-lg ${mobile ? 'mt-2' : 'mt-1'} min-w-[200px] z-50 shadow-xl`}>
          {item.subItems?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href || "#"}
              className="flex items-center py-2 px-3 hover:bg-[#f6b146] hover:text-[#191307] rounded transition-colors text-sm"
            >
              {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Right Side Icon Dropdown Component
const IconDropdown = ({
  icon,
  items,
  badge,
  mobile = false
}: {
  icon: React.ReactNode;
  items: { href?: string; label: string; icon?: React.ReactNode; onClick?: () => void }[];
  badge?: number;
  mobile?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${mobile ? 'mx-1' : 'ml-2'}`} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`relative p-2 rounded-full transition-colors ${mobile ? 'bg-white text-[#36322f]' : 'bg-white text-[#36322f]'} hover:bg-[#f6b146]`}
      >
        {icon}
        {badge && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {badge}
          </span>
        )}
      </button>
      {isOpen && (
        <div className={`absolute ${mobile ? 'left-0' : 'right-0'} w-56 mt-2 bg-[#191307E6] rounded-lg shadow-xl z-50 py-1`}>
          {items.map((item, index) => (
            item.href ? (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-2 text-sm hover:bg-[#f6b146] hover:text-[#191307] transition-colors"
              >
                {item.icon && <span className="mr-3">{item.icon}</span>}
                {item.label}
              </Link>
            ) : (
              <button
                key={index}
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
                className="flex w-full items-center px-4 py-2 text-sm hover:bg-[#f6b146] hover:text-[#191307] transition-colors"
              >
                {item.icon && <span className="mr-3">{item.icon}</span>}
                {item.label}
              </button>
            )
          ))}
        </div>
      )}
    </div>
  );
};

// Main Layout Component
export default function MemberLayout({ children }: MemberLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuthContext();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="text-white py-3 bg-[#17120a] fixed w-full z-50 border-b border-[#f6b146]/20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/member" className="flex items-center">
            <Image src="/svgs/logo.svg" alt="NEW EDUCATION STANDARD AWARDS AFRICA" width={150} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {mainMenuConfig.map((item, index) => (
              item.subItems ? (
                <NavDropdown key={index} item={item} />
              ) : (
                <NavItem key={index} item={item} />
              )
            ))}
            <WalletInfo />
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4 ml-4"> {/* Updated spacing */}
            <IconDropdown
              icon={<IoNotificationsOutline size={20} />}
              badge={3}
              items={notificationItems}
            />
            <IconDropdown
              icon={<IoSettingsOutline size={20} />}
              items={[
                ...profileItems.slice(0, -1), // All items except the last one (Logout)
                {
                  label: "Logout",
                  onClick: handleLogout,
                  icon: <IoLogOutOutline className="h-4 w-4" />
                }
              ]}
            />
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-white p-2" onClick={toggleMenu}>
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#191307E6] mt-2 p-4 space-y-3 border-t border-[#f6b146]/10">
            {mainMenuConfig.map((item, index) => (
              item.subItems ? (
                <NavDropdown key={index} item={item} mobile />
              ) : (
                <NavItem key={index} item={item} mobile />
              )
            ))}
            <div className="pt-2">
              <WalletInfo />
            </div>
            <div className="flex justify-center space-x-2 pt-4">
              <IconDropdown
                mobile
                icon={<IoNotificationsOutline size={20} />}
                badge={3}
                items={notificationItems}
              />
              <IconDropdown
                mobile
                icon={<IoSettingsOutline size={20} />}
                items={[
                  ...profileItems.slice(0, -1), // All items except the last one (Logout)
                  {
                    label: "Logout",
                    onClick: handleLogout,
                    icon: <IoLogOutOutline className="h-4 w-4" />
                  }
                ]}
              />
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}