import React from "react";
import { Article } from "fxtsx-html/sectioning/Article/Article";
import { useTranslation } from "react-i18next";

export const Partners = function Partners() {
  const { t } = useTranslation("");

  const level = 2;
  return (
    <Article data-mpp-apply $level={level} $title={t("greeting")}>
      {/*      <form>
        <Fieldset
          $level={level + 1}
          $title={t("partnersApply.Fieldset_partner_Legend")}
        >
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
        </Fieldset>
        <Fieldset
          $level={level + 1}
          $title={t("partnersApply.Fieldset_application_Legend")}
        >
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
        </Fieldset>
        <Fieldset
          $level={level + 1}
          $title={t("partnersApply.Fieldset_proposal_Legend")}
        >
          <FileField
            $key={"proposal"}
            $label={t("partnersApply.Input_proposal.label")}
            placeholder={t("partnersApply.Input_proposal.placeholder")}
          />
        </Fieldset>

        <Fieldset
          $level={level + 1}
          $title={t("partnersApply.Fieldset_corporation_Legend")}
        >
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
          <TextField
            $key={"applicant.email"}
            $label={t("partnersApply.Input_applicant_email.label")}
            placeholder={t("partnersApply.Input_applicant_email.placeholder")}
            type={"email"}
            required
          />
          <TextField
            $key={"applicant.phone"}
            $label={t("partnersApply.Input_applicant_phone.label")}
            placeholder={t("partnersApply.Input_applicant_phone.placeholder")}
            type={"tel"}
          />
          <FileField
            $key={"corporation.intro"}
            $label={t("partnersApply.Input_corporationIntro_profile.label")}
            placeholder={t(
              "partnersApply.Input_corporationIntro_profile.placeholder"
            )}
          />
          <TextField
            $key={"corporation.domain"}
            $label={t("partnersApply.Input_corporation_domain.label")}
            placeholder={t(
              "partnersApply.Input_corporation_domain.placeholder"
            )}
          />
        </Fieldset>
        <Fieldset
          $level={level + 1}
          data-privacyTerm
          $title={t("partnersApply.Fieldset_privacy_term_Legend")}
        >
          <CheckOption
            name={"label_check_all"}
            $label={t("partnersApply.Input_privacy_term.label_check_all")}
          />
          <Select
            $data={{
              check_agree: "CHECK_AGREE",
            }}
            $valueFormats={{
              check_agree: t(
                "partnersApply.Input_privacy_term.options.check_agree"
              ),
            }}
          />
          <Button
            $data={t("partnersApply.privacy_term_Section_sec1_detail_summary")}
            type={"button"}
          />
          <Dialog
            $closeButtonLabel={t(
              "partnersApply.privacy_term_Button_dialog_close"
            )}
          >
            <Section
              $level={level + 2}
              $title={t("partnersApply.privacy_term_Section_sec1_H")}
              $contents={
                <>
                  <Ul<ReturnType<typeof t>>
                    $data={t("partnersApply.privacy_term_Section_sec1_list", {
                      returnObjects: true,
                    })}
                  />
                  <P $data={t("partnersApply.privacy_term_Section_sec1_p")} />
                </>
              }
            />
          </Dialog>
        </Fieldset>
        <Fieldset
          $level={level + 1}
          $title={t("partnersApply.Fieldset_apply_notice_Legend")}
        >
          <CheckOption
            $label={t("partnersApply.Input_apply_notice.label_check_all")}
          />
          <Select
            $data={t("partnersApply.Input_apply_notice.options", {
              returnObjects: true,
            })}
          />
          <Button
            $data={t("partnersApply.apply_notice_Section_sec1_detail_summary")}
          />
          <Dialog
            $closeButtonLabel={t(
              "partnersApply.apply_notice_Button_dialog_close"
            )}
          >
            <Section
              $level={level + 2}
              $title={t("partnersApply.apply_notice_Section_sec1_H")}
              $contents={
                <>
                  <Ul<ReturnType<typeof t>>
                    $data={t("partnersApply.apply_notice_Section_sec1_list", {
                      returnObjects: true,
                    })}
                  />
                </>
              }
            />
          </Dialog>
        </Fieldset>
        <Button $data={t("partnersApply.Form_Button_ok")} />
        <Button $data={t("partnersApply.Form_Button_cancel")} />
      </form>*/}
    </Article>
  );
};
