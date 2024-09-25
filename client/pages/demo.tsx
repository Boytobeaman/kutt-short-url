import getConfig from "next/config";
import React from "react";

import AppWrapper from "../components/AppWrapper";
import { Col } from "../components/Layout";

const { publicRuntimeConfig } = getConfig();

const TermsPage = () => (
  <AppWrapper>
    {/* TODO: better container */}
    <Col width={600} maxWidth="97%" alignItems="flex-start">
      <p>模特春季服装,经典款</p>

      <img
        src="/images/model-img.jpeg"
        alt="Picture of the author"
      />
    </Col>
  </AppWrapper>
);

export default TermsPage;
