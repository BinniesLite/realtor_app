import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>


      <Layout>
        <ChakraProvider>
          <Component {...pageProps}/>
        </ChakraProvider>
      </Layout>
    </>
  );
}

export default MyApp;
