import React from "react";
import type { ArticleProps } from "fxtsx-html/sectioning/Article/Article";
import { Article } from "fxtsx-html/sectioning/Article/Article";
import { useTranslation } from "react-i18next";
import { Section } from "fxtsx-html/sectioning/Section/Section";
import { Ul } from "fxtsx-html/data-structure/Ul/Ul";

export const PartnersApplyProcess = function PartnersApplyProcess({
  $level = 1,
  ...restProps
}: ArticleProps) {
  const { t } = useTranslation("partners.apply.process");
  return (
    <Article
      data-partners-apply-process
      {...restProps}
      $title={t("title")}
      $level={$level}
    >
      <Section
        data-reception
        $title={t("reception.title")}
        $level={$level + 1}
        $contents={
          <Ul<ReturnType<typeof t>>
            $data={t("reception.list", {
              returnObjects: true,
            })}
          />
        }
      />
      <Section
        data-review
        $title={t("review.title")}
        $level={$level + 1}
        $contents={
          <Ul<ReturnType<typeof t>>
            $data={t("review.list", {
              returnObjects: true,
            })}
          />
        }
      />
      <Section
        data-completion
        $title={t("completion.title")}
        $level={$level + 1}
        $contents={
          <Ul<ReturnType<typeof t>>
            $data={t("completion.list", {
              returnObjects: true,
            })}
          />
        }
      />
    </Article>
  );
};
