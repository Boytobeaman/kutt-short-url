import getConfig from "next/config";
import React from "react";

import AppWrapper from "../components/AppWrapper";
import { Col } from "../components/Layout";

const { publicRuntimeConfig } = getConfig();

const TermsPage = () => (
  <AppWrapper>
    {/* TODO: better container */}
    <Col width={600} maxWidth="97%" alignItems="flex-start">
      <p>The Old Man and the Sea is a 1952 novella by the American author Ernest Hemingway. Written between December 1950 and February 1951, it was the last major fictional work Hemingway published during his lifetime. It tells the story of Santiago, an aging fisherman, and his long struggle to catch a giant marlin.</p>
    </Col>
  </AppWrapper>
);

export default TermsPage;
