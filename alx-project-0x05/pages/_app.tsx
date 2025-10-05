import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/layouts/Header";
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Header />    {/* Header stays visible on all pages */}
      <Component {...pageProps} />  {/* This renders the current page */}
    </CountProvider>
  );
}
