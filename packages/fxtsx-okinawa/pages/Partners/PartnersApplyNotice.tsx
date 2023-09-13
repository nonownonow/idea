import React from "react";
import type { ArticleProps } from "fxtsx-html/sectioning/Article/Article";
import { Article } from "fxtsx-html/sectioning/Article/Article";
import { useTranslation } from "react-i18next";
import { Ul } from "fxtsx-html/data-structure/Ul/Ul";

export const PartnersApplyNotice = function PartnersApplyNotice({
  $level = 0,
  ...props
}: ArticleProps) {
  const { t, ready } = useTranslation("partners.apply.notice");
  if (!ready) return null;
  return (
    <Article {...props} $level={$level + 1} $title={t("title")}>
      <Ul $data={t("list", { returnObjects: true })} />
    </Article>
  );
};
