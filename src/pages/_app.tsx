import type { AppProps } from "next/app";
import Head from "next/head";

import { MantineProvider } from "@mantine/core";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to the DevsIndia Community!</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        // Customize the colorscheme over here
        theme={{ colorScheme: "dark" }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default App;
