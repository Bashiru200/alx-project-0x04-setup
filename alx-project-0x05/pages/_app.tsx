import Header from "@/components/layouts/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </CountProvider>
  )
}