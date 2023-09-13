import React from "react";
import { Article } from "fxtsx-html/sectioning/Article/Article";
import { useTranslation } from "react-i18next";
import { Fieldset } from "fxtsx-html/sectioning";
import { SelectField } from "fxtsx-html/data-input/SelectField/SelectField";
import { Section } from "fxtsx-html/sectioning/Section/Section";
import { P } from "fxtsx-html/Value/P/P";
import { TextField } from "fxtsx-html/data-input/TextField/TextField";
import { TextAreaField } from "fxtsx-html/data-input/TextAreaField/TextAreaField";
import { FileField } from "fxtsx-html/data-input/FileField/FileField";
import { Button } from "fxtsx-html/Value/Button/Button";
import { Dialog } from "fxtsx-html/data-view/Dialog/Dialog";
import { PartnersApplyProcess } from "./PartnersApplyProcess";
import { CheckOption } from "fxtsx-html/Value/CheckOption/CheckOption";
import { PartnersPrivacyTerm } from "./partnersPrivacyTerm";
import { PartnersApplyNotice } from "./PartnersApplyNotice";

export const Partners = function Partners() {
  const { t, ready } = useTranslation("partners.apply");

  const level = 2;
  if (!ready) return null;

  return (
    <Article data-mpp-apply $level={level} $title={t("h")}>
      <Section
        $level={level + 1}
        $title={t("section1.hgroup.h")}
        $subTitle={<P>{t("section1.hgroup.p1")}</P>}
      >
        <P>{t("section1.p1")}</P>
        <Button>{t("section1.button_open")}</Button>
        <Dialog open $closeButtonLabel={t("section1.button_close")}>
          <PartnersApplyProcess $level={level + 1} />
        </Dialog>
      </Section>
      <form>
        <Fieldset $level={level + 1} $title={t("section2.h")}>
          <SelectField
            $options={{
              supply: "SUPPLY",
              produce: "PRODUCE",
            }}
            id={"partner_type"}
            $label={t("section2.partner_type.label")}
            $valueFormats={t("section2.partner_type.options", {
              returnObjects: true,
            })}
          />
        </Fieldset>
        <Fieldset $level={level + 1} $title={t("section3.h")}>
          <TextField
            id={"application.title"}
            $label={t("section3.application.title.label")}
            placeholder={t("section3.application.title.placeholder")}
          />
          <TextAreaField
            id={"application.content"}
            $label={t("section3.application.content.label")}
            placeholder={t("section3.application.title.placeholder")}
          />
        </Fieldset>
        <Fieldset $level={level + 1} $title={t("section4.h")}>
          <FileField
            id={"proposal"}
            $label={t("section4.proposal.label")}
            placeholder={t("section4.proposal.placeholder")}
          />
        </Fieldset>
        <Fieldset $level={level + 1} $title={t("section5.h")}>
          <SelectField
            id={"corporation.type"}
            $label={t("section5.corporation.type.label")}
            $options={{
              private_enterprise: "PRIVATE_ENTERPRISE",
              corporation: "CORPORATION",
              social_enterprise: "SOCIAL_ENTERPRISE",
              etc: "ETC",
            }}
            $valueFormats={
              t("section5.corporation.type.options", {
                returnObjects: true,
              }) as any
            }
          />
          <TextField
            id={"corporation.name"}
            $label={t("section5.corporation.name.label")}
            placeholder={t("section5.corporation.name.placeholder")}
          />
          <TextField
            id={"applicant.name"}
            $label={t("section5.applicant.name.label")}
            placeholder={t("section5.applicant.name.placeholder")}
          />
          <SelectField
            id={"applicant.rank"}
            $label={t("section5.applicant.rank.label")}
            placeholder={t("section5.applicant.rank.placeholder")}
            $options={{
              ceo: "CEO",
              general_manager: "general_manager",
              manager: "MANAGER",
              assistant_manager: "ASSISTANT_MANAGER",
              staff: "STAFF",
              etc: "ETC",
            }}
            $valueFormats={t("section5.applicant.rank.options", {
              returnObject: true,
            })}
          />
          <TextField
            id={"applicant.email"}
            $label={t("section5.applicant.email.label")}
            placeholder={t("section5.applicant.email.placeholder")}
            type={"email"}
            required
          />
          <TextField
            id={"applicant.phone"}
            $label={t("section5.applicant.phone.label")}
            placeholder={t("section5.applicant.rank.placeholder")}
            type={"tel"}
          />
          <FileField
            id={"corporation.profile"}
            $label={t("section5.corporation.profile.label")}
            placeholder={t("section5.corporation.profile.placeholder")}
          />
          <TextField
            id={"corporation.domain"}
            $label={t("section5.corporation.domain.label")}
            placeholder={t("section5.corporation.domain.placeholder")}
          />
        </Fieldset>
        <Fieldset
          $level={level + 1}
          data-privacy-term-agree
          $title={t("section6.h")}
        >
          <CheckOption
            name={"private_term"}
            $valueLabel={t("section6.privacy_term_agree.label")}
          />
          <Button $valueLabel={t("section6.button_open")} type={"button"} />
          <Dialog $closeButtonLabel={t("section6.button_close")}>
            <PartnersPrivacyTerm $level={level + 2} />
          </Dialog>
        </Fieldset>
        <Fieldset
          $level={level + 1}
          data-privacy-term-agree
          $title={t("section7.h")}
        >
          <CheckOption
            name={"private_term"}
            $valueLabel={t("section7.apply_notice_agree.label")}
          />
          <Button $valueLabel={t("section7.button_open")} type={"button"} />
          <Dialog $closeButtonLabel={t("section7.button_close")}>
            <PartnersApplyNotice $level={level + 2} />
          </Dialog>
        </Fieldset>
      </form>
    </Article>
  );
};
