import React from "react";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { PageContextProvider } from "./page-context";

export const wrapRootElement = (props) => {
  const { element } = props;
  return <I18nextProvider i18={i18n}>{element}</I18nextProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContextProvider pageContext={props.pageContext}>
      {element}
    </PageContextProvider>
  );
};
