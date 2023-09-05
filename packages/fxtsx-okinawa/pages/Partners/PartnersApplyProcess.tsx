import React from "react";
import { Article } from "fxtsx-html/sectioning/Article/Article";
import { useTranslation } from "react-i18next";
import type { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import { Section } from "fxtsx-html/sectioning/Section/Section";
import { Ul } from "fxtsx-html/data-structure/Ul/Ul";

export const PartnersApplyProcess = function PartnersApplyProcess({
  $level = 1,
  ...restProps
}: SECTIONING) {
  const { t } = useTranslation();
  return (
    <Article
      {...restProps}
      $title={t("partnersApplyProcess.H")}
      $level={$level}
    >
      <Section
        $title={t("partnersApplyProcess.Section_sec1_H")}
        $level={$level + 1}
        $contents={
          <Ul<ReturnType<typeof t>>
            $data={t("partnersApplyProcess.Section_sec1_list", {
              returnObjects: true,
            })}
          />
        }
      />
      <Section
        $title={t("partnersApplyProcess.Section_sec2_H")}
        $level={$level + 1}
        $contents={
          <Ul<ReturnType<typeof t>>
            $data={t("partnersApplyProcess.Section_sec2_list", {
              returnObjects: true,
            })}
          />
        }
      />
      <Section
        $title={t("partnersApplyProcess.Section_sec3_H")}
        $level={$level + 1}
        $contents={
          <Ul<ReturnType<typeof t>>
            $data={t("partnersApplyProcess.Section_sec3_list", {
              returnObjects: true,
            })}
          />
        }
      />
    </Article>
  );
};
