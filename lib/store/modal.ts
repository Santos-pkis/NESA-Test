import { create } from "zustand";

interface Modal {
  visible: boolean;
  content: JSX.Element | null;
  hideModal: () => void;
  toggleModal: () => void;
  showModal: (content: JSX.Element) => void;
}

export const useModal = create<Modal>((set) => ({
  content: null,
  visible: false,
  hideModal: () => set(() => ({ content: null, visible: false })),
  toggleModal: () => set((state) => ({ ...state, visible: !state.visible })),
  showModal: (content: JSX.Element) => set((state) => ({ ...state, content, visible: true })),
}));
