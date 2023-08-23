import React from "react";
import { Article } from "fxtsx-html/sectioning/Article/Article";
import { useTranslation } from "react-i18next";

// export type PartnersProps =

export const Partners = function Partners() {
  const { t } = useTranslation();
  return <Article $level={1} $title={t("partnersApply.H")} />;
};
