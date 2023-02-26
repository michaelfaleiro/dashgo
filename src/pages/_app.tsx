import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

import { SidebarDrawerProvider } from "@/context/SidebarDrawerContext";
import { MakeServer } from "@/services/mirage";

if (process.env.NODE_ENV === 'development') {
  MakeServer()
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}
