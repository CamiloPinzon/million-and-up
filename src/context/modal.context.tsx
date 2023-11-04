import { createContext, useState, useContext } from "react";

import { ModalContextType, ContextProviderProps } from "@/types";

const modalContextDefaultValues: ModalContextType = {
	isModalOpen: false,
	toggleModalOpen: () => {},
};

const ModalContext = createContext<ModalContextType>(modalContextDefaultValues);

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: ContextProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const toggleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};

	const value = { isModalOpen, toggleModalOpen };
	return (
		<>
			<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
		</>
	);
};
