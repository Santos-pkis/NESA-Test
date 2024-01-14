"use client";

import { PropsWithChildren } from "react";
import AuthProvider from "./auth-provider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DefaultToastOptions, Toaster } from "react-hot-toast";
import Modal from "@/components/Common/Modal";
import { useModal } from "../store/modal";
import ModalProvider from "./modal-provider";

// register gsap basic plugins
gsap.registerPlugin(ScrollTrigger);

// All providers should placed into this file
const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const toastOptions: DefaultToastOptions = {
    style: {
      minWidth: "250px",
    },
    duration: 2000,
    position: "bottom-right",
  };


  return (
    <AuthProvider>
      <Toaster toastOptions={toastOptions} />

      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};

export default Providers;
