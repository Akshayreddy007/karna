import React, { Component, useState, useEffect } from "react";
import "../styles/globals.css";
import "../fontawesome/css/all.min.css";
import "bootstrap/scss/bootstrap.scss";
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from "react-pro-sidebar";
import { getToken } from "../components/tokenauth/AuthToken";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";
import { RecoilRoot } from "recoil";
export default function MyApp({ Component, pageProps }) {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_SERVER_URL,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: getToken(),
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  if (!show) {
    return null;
  }

  if (typeof window === 'undefined') {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <RecoilRoot>
          <ProSidebarProvider>
            <Component {...pageProps} />
          </ProSidebarProvider>
        </RecoilRoot>
      </ApolloProvider>
    );
  }
}
