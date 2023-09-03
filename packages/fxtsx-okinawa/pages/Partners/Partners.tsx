import React from "react";
import { Article } from "fxtsx-html/sectioning/Article/Article";
import { useTranslation } from "react-i18next";
import { Section } from "fxtsx-html/sectioning/Section/Section";
import { htmlChildren } from "fxtsx/util/util";
import { Dialog } from "fxtsx-html/data-view/Dialog/Dialog";
import { Button } from "fxtsx-html/Value/Button/Button";
import { Heading } from "fxtsx-html/sectioning/H/Heading";
import { SelectField } from "fxtsx-html/data-input/SelectField/SelectField";
import { TextField } from "../../data-input/TextField/TextField";
import {
  EmailField,
  TelField,
} from "fxtsx-html/data-input/TextField/TextField";
import { FileField } from "fxtsx-html/data-input/FileField/FileField";
import { Fieldset } from "fxtsx-html/sectioning";

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
          $closeButtonLabel={t("partnersApply.Section_sec1_modal_button")}
        >
          <p {...htmlChildren(t("partnersApply.Section_sec1_Detail"))} />
        </Dialog>
      </Section>
      <form>
        <Heading $title={t("partnersApply.Form_H")} $level={level + 1} />
        {/*        <fieldset>
          <legend
            {...htmlChildren(t("partnersApply.Fieldset_partner_Legend"))}
          />
          <SelectField
            $data={partnerType}
            $key={"partner_type"}
            $label={"파트너 타입"}
            $valueFormats={
              t("partnersApply.Input_partner_type.partners_type_label", {
                returnObjects: true,
              }) as any
            }
          />
        </fieldset>
        <fieldset>
          <legend
            {...htmlChildren(t("partnersApply.Fieldset_application_Legend"))}
          />
          <TextField
            $key={"title"}
            $label={t("partnersApply.Input_application_title.placeholder")}
            placeholder={t("partnersApply.Input_application_title.placeholder")}
          />
          <TextAreaField
            $key={"content"}
            $label={t("partnersApply.Input_application_content.label")}
            placeholder={t(
              "partnersApply.Input_application_content.placeholder"
            )}
          />
        </fieldset>
        <fieldset>
          <legend
            {...htmlChildren(t("partnersApply.Fieldset_proposal_Legend"))}
          />
          <FileField
            $key={"proposal"}
            $label={t("partnersApply.Input_proposal.label")}
            placeholder={t("partnersApply.Input_proposal.placeholder")}
          />
        </fieldset>*/}
        <Fieldset $title={t("partnersApply.Fieldset_corporation_Legend")}>
          <SelectField
            $key={"corporation.type"}
            $label={t("partnersApply.Input_corporation_type.label")}
            $data={{
              private_enterprise: "PRIVATE_ENTERPRISE",
              corporation: "CORPORATION",
              social_enterprise: "SOCIAL_ENTERPRISE",
              etc: "ETC",
            }}
            $valueFormats={
              t("partnersApply.Input_corporation_type.option_label", {
                returnObjects: true,
              }) as any
            }
          />
          <TextField
            $key={"corporation.name"}
            $label={t("partnersApply.Input_corporation_name.label")}
            placeholder={t("partnersApply.Input_corporation_name.placeholder")}
          />
          <TextField
            $key={"applicant.name"}
            $label={t("partnersApply.Input_applicant_name.label")}
            placeholder={t("partnersApply.Input_applicant_name.placeholder")}
          />
          <TextField
            $key={"applicant.rank"}
            $label={t("partnersApply.Input_applicant_rank.label")}
            placeholder={t("partnersApply.Input_applicant_rank.placeholder")}
          />
          <EmailField
            $key={"applicant.email"}
            $label={t("partnersApply.Input_applicant_email.label")}
            placeholder={t("partnersApply.Input_applicant_email.placeholder")}
            required
          />
          <TelField
            $key={"applicant.phone"}
            $label={t("partnersApply.Input_applicant_phone.label")}
            placeholder={t("partnersApply.Input_applicant_phone.placeholder")}
          />
          <FileField
            $key={"corporation_intro"}
            $label={t("partnersApply.Input_corporationIntro_profile.label")}
            placeholder={t(
              "partnersApply.Input_corporationIntro_profile.placeholder"
            )}
          />
        </Fieldset>
        <button>submit</button>
      </form>
    </Article>
  );
};
