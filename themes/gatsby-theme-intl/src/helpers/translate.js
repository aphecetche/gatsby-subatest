import React, { useEffect } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { useTranslation as useT } from "react-i18next";
import { usePageContext } from "../../page-context";
import PropTypes from "prop-types";

const MissingTranslation = ({ value }) => (
  <Tooltip color="error" title={`Missing translation for ${value}`}>
    <Typography color="error">
      <ErrorIcon color="error" />
      {value}
    </Typography>
  </Tooltip>
);

MissingTranslation.propTypes = {
  value: PropTypes.string,
};

const useTranslation = () => {
  const { language } = usePageContext();
  const { t: u, i18n } = useT();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  return {
    ...u,
    t: (msgid, values) => {
      if (!i18n.exists(msgid)) {
        if (i18n.language === "fr") {
          return msgid;
        }
        return <MissingTranslation value={msgid} />;
      }
      return u(msgid, values);
    },
    i18n,
  };
};

const getTranslatedContent = (edges, locale) => {
  const node = edges.filter(
    (n) => n.node.fields.language === locale || n.node.fields.language === "xx"
  );
  return { node: node.length > 0 ? node[0].node : null };
};

/* ensure the slug is starting with /fr or /en */
const localizeUrl = (url, language = "fr") => {
  if (url.match(/^\//) && !url.match(/^\/fr/) && !url.match(/^\/en/)) {
    return "/" + language + url;
  }
  return url;
};
export { getTranslatedContent, useTranslation, localizeUrl };
