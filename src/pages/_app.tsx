import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

import { ReactQueryDevtools } from "react-query/devtools";

import {  QueryClientProvider } from "react-query";
import { SidebarDrawerProvider } from "@/context/SidebarDrawerContext";
import { MakeServer } from "@/services/mirage";
import {queryClient} from "@/services/queryClient";

if (process.env.NODE_ENV === "development") {
  MakeServer();
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
