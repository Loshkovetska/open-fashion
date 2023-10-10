import { Provider } from "react-redux";
import store from "../../../store";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Head>
        <title>Open Fashion</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500;6..96,600;6..96,700;6..96,800;6..96,900&family=Tenor+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </Provider>
  );
}
