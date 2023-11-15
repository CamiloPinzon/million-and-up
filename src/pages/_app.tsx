import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";

import { ModalProvider } from "@/context/modal.context";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<ModalProvider>
					<Component {...pageProps} />
				</ModalProvider>
			</Provider>
		</>
	);
}
