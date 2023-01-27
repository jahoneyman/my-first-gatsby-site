import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by followign the Gatsby Tutorials.</p>
      <StaticImage alt="The Gatsby Logo Stored in Local" src="../images/icon.png" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
