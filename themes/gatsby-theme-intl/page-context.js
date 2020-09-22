import React from "react";
import PropTypes from "prop-types";

const PageContext = React.createContext({});

export const PageContextProvider = ({ children, pageContext }) => {
  return (
    <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
  );
};

PageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    translations: PropTypes.arrayOf(PropTypes.string),
    language: PropTypes.string,
  }).isRequired,
};

export const usePageContext = () => {
  const context = React.useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};
