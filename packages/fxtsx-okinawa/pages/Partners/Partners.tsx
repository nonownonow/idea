import React from "react";
import { Article } from "fxtsx-html/sectioning/Article/Article";
import { useTranslation } from "react-i18next";
import { Section } from "fxtsx-html/sectioning/Section/Section";
import { htmlChildren } from "fxtsx/util/util";
import { Dialog } from "fxtsx-html/data-view/Dialog/Dialog";
import { Button } from "fxtsx-html/Value/Button/Button";
import { Heading } from "fxtsx-html/sectioning/H/Heading";
import { Select } from "fxtsx-html/data-input/Select/Select";
import { partnerType } from "~/i18n/translations/ko";

export const Partners = function Partners() {
  const { t } = useTranslation();
  const level = 1;
  return (
    <Article data-mpp-apply $level={level} $title={t("partnersApply.H")}>
      <Section
        $title={t("partnersApply.Section_sec1_Hgroup_H")}
        $level={level + 1}
        $subTitle={
          <p {...htmlChildren(t("partnersApply.Section_sec1_Hgroup_P"))} />
        }
      >
        <p {...htmlChildren(t("partnersApply.Section_sec1_P"))} />
        {/*        <Details
          $summary={t("partnersApply.Section_sec1_Detail_Summary")}
          $openMark={"+"}
          $closeMark={"-"}
        >
          <p {...htmlChildren(t("partnersApply.Section_sec1_Detail"))} />
        </Details>*/}
        <Button>
          <span
            {...htmlChildren(t("partnersApply.Section_sec1_Detail_Summary"))}
          />
        </Button>
        <Dialog
          open
          $closeButtonLabel={t("partnersApply.Section_sec1_modal_button")}
        >
          <p {...htmlChildren(t("partnersApply.Section_sec1_Detail"))} />
        </Dialog>
      </Section>
      <form>
        <Heading $title={t("partnersApply.Form_H")} $level={level + 1} />
        <fieldset>
          <legend
            {...htmlChildren(t("partnersApply.Fieldset_partner_Legend"))}
          />
          <Select
            $data={partnerType}
            $valueFormats={
              t("partnersApply.Input_partner_type.partners_type_label", {
                returnObjects: true,
              }) as any
            }
          />
        </fieldset>
      </form>
    </Article>
  );
};
