"use client";
import Modal from "@/components/Common/Modal";
import { FC, PropsWithChildren, useEffect } from "react";
import { useModal } from "../store/modal";
import { AnimatePresence } from "framer-motion";

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const { visible } = useModal();

  useEffect(() => {
    console.log(visible);
  }, [visible]);

  return (
    <>
      {/* <AnimatePresence initial={false} mode="wait">
        {visible && <Modal visible={visible} key={"modal-"} />}
      </AnimatePresence> */}

      {children}
    </>
  );
};

export default ModalProvider;
