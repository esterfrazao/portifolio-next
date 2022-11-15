import GlobalStyle from "../styles/globals";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { collorPallete } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={collorPallete}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
