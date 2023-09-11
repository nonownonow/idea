import React from "react";
import type { ArticleProps } from "fxtsx-html/sectioning/Article/Article";
import { Article } from "fxtsx-html/sectioning/Article/Article";
import { useTranslation } from "react-i18next";
import { Ul } from "fxtsx-html/data-structure/Ul/Ul";

export const PartnersPrivacyTerm = function PartnersPrivacyTerm({
  $level = 0,
  ...props
}: ArticleProps) {
  const { t } = useTranslation("partners.privacy.term");
  return (
    <Article {...props} $level={$level + 1} $title={t("title")}>
      <Ul $data={t("list", { returnObject: true })} />
    </Article>
  );
};
