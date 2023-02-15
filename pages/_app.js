import "@/styles/globals.css";
import ThemeProvider from "../hooks/useTheme";
import Layout from "@/components/layouts/Layout";
import { NextUIProvider } from "@nextui-org/react";
import { MessageContextProvider } from "../context/MessageContext";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <MessageContextProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MessageContextProvider>
    </NextUIProvider>
  );
}
