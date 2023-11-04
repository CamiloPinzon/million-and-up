import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ModalProvider } from "@/context/modal.context";
import { PagesProvider } from "@/context/pages.context";
import { CryptoDataProvider } from "@/context/crypto-data.context";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<CryptoDataProvider>
				<ModalProvider>
					<PagesProvider>
						<Component {...pageProps} />
					</PagesProvider>
				</ModalProvider>
			</CryptoDataProvider>
		</>
	);
}

export default MyApp;
