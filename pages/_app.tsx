import RootLayout from "../components/common/RootLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PrimeReactProvider } from "primereact/api";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <PrimeReactProvider>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </RootLayout>
  );
}

export default MyApp;
