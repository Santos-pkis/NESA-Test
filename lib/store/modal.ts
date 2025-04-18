import { create } from "zustand";

type ModalType = "success" | "error" | "info" | "vote";

interface Modal {
  visible: boolean;
  content: JSX.Element | null;
  type: ModalType | null;
  hideModal: () => void;
  showModal: (content: JSX.Element, type: ModalType) => void;
}

export const useModal = create<Modal>((set) => ({
  visible: false,
  content: null,
  type: null,
  hideModal: () => set(() => ({ visible: false, content: null, type: null })),
  showModal: (content, type) =>
    set(() => ({ visible: true, content, type })),
}));