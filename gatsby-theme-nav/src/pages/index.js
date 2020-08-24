import React from "react";
import Navigation from "../components/Navigation";
import jsonNav from "../../navigation.json";

const nav1 = [
  {
    title: "page1",
    to: "page1/titi",
    groups: [
      {
        title: "page1/group1",
        links: [
          {
            to: "/page1/group1/article1",
            label: "Article1",
          },
          {
            to: "/page1/group1/article2",
            label: "Article2",
          },
        ],
      },
    ],
  },
  {
    title: "page2",
    to: "page2/toto",
  },
];

const Demo = () => (
  <>
    <Navigation data={nav1} />
    <Navigation data={jsonNav} initialActive="" />
  </>
);

export default Demo;
