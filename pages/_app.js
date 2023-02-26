import Layout from "../components/custom/Layout";
import "../styles/globals.scss";
import React, { useEffect, useState, useRef } from "react";
import {BrowserRouter as Router} from "react-router-dom";
function MyApp({ Component, pageProps }) {
  return (
    // <Router>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </Router>
  );
}

export default MyApp;
