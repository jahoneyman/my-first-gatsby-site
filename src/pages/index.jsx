import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by followign the Gatsby Tutorials.</p>
      <StaticImage alt="The Gatsby Logo Stored in Local" src="../images/icon.png" />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
