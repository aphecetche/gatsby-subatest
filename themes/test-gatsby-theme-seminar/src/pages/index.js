import React from "react";
import { AllSeminars, Seminars } from "gatsby-theme-seminar";

const IndexPage = () => {
  return (
    <>
      <h1>tous les séminaires</h1>
      <AllSeminars showTitle={false} />
      <h1>séminaires récents et à venir</h1>
      <Seminars />
    </>
  );
};

export default IndexPage;
