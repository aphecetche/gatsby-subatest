import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  return (
    <>
      <h1>{t("Tutelles")}</h1>
      <h2>Current language is {i18n.language}</h2>
      <button
        onClick={() => {
          const newLang = i18n.language === "fr" ? "en" : "fr";
          i18n.changeLanguage(newLang);
        }}
      >
        change language
      </button>
    </>
  );
}
export default HomePage;
