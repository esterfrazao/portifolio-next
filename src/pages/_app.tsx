import GlobalStyle from "../styles/globals";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { collorPallete } from "../styles/theme";
import { APIProvider } from "../providers";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={collorPallete}>
        <APIProvider>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </APIProvider>
      </ThemeProvider>
    </>
  );
}
