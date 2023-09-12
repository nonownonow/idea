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

export const Partners = function Partners() {
  const { t, ready } = useTranslation("partners.apply");

  const level = 2;
  if (!ready) return null;
  const type = t("fieldset1.partner_type.options", {
    returnObjects: true,
  });
  console.log(type);
  console.log(t("fieldset1.legend"));
  return (
    <Article data-mpp-apply $level={level} $title={t("heading")}>
      <Section
        $level={level + 1}
        $title={t("section1.hgroup.heading")}
        $subTitle={<P>{t("section1.hgroup.p1")}</P>}
      >
        <P>{t("section1.p1")}</P>
        <Dialog open $closeButtonLabel={t("section1.button_close")}>
          <PartnersApplyProcess $level={level + 1} />
          <Button>{t("section1.button_open")}</Button>
        </Dialog>
      </Section>
      <form>
        <Fieldset $level={level + 1} $title={t("fieldset1.legend")}>
          <SelectField
            $options={{
              supply: "SUPPLY",
              produce: "PRODUCE",
            }}
            id={"partner_type"}
            $label={t("fieldset1.partner_type.label")}
            $valueFormats={t("fieldset1.partner_type.options", {
              returnObjects: true,
            })}
          />
        </Fieldset>
        <Fieldset $level={level + 1} $title={t("fieldset2.legend")}>
          <TextField
            id={"application.title"}
            $label={t("fieldset2.application.title.label")}
            placeholder={t("fieldset2.application.title.placeholder")}
          />
          <TextAreaField
            id={"application.content"}
            $label={t("fieldset2.application.content.label")}
            placeholder={t("fieldset2.application.title.placeholder")}
          />
        </Fieldset>
        <Fieldset $level={level + 1} $title={t("fieldset3.legend")}>
          <FileField
            id={"proposal"}
            $label={t("fieldset3.proposal.label")}
            placeholder={t("fieldset3.proposal.placeholder")}
          />
        </Fieldset>
        <Fieldset $level={level + 1} $title={t("fieldset4.legend")}>
          <SelectField
            id={"corporation.type"}
            $label={t("fieldset4.corporation.type.label")}
            $options={{
              private_enterprise: "PRIVATE_ENTERPRISE",
              corporation: "CORPORATION",
              social_enterprise: "SOCIAL_ENTERPRISE",
              etc: "ETC",
            }}
            $valueFormats={
              t("fieldset4.corporation.type.options", {
                returnObjects: true,
              }) as any
            }
          />
          <TextField
            id={"corporation.name"}
            $label={t("fieldset4.corporation.name.label")}
            placeholder={t("fieldset4.corporation.name.placeholder")}
          />
          <TextField
            id={"applicant.name"}
            $label={t("fieldset4.applicant.name.label")}
            placeholder={t("fieldset4.applicant.name.placeholder")}
          />
          <SelectField
            id={"applicant.rank"}
            $label={t("fieldset4.applicant.rank.label")}
            placeholder={t("fieldset4.applicant.rank.placeholder")}
            $options={{
              ceo: "CEO",
              general_manager: "general_manager",
              manager: "MANAGER",
              assistant_manager: "ASSISTANT_MANAGER",
              staff: "STAFF",
              etc: "ETC",
            }}
            $valueFormats={t("fieldset4.applicant.rank.options", {
              returnObject: true,
            })}
          />
          <TextField
            id={"applicant.email"}
            $label={t("fieldset4.applicant.email.label")}
            placeholder={t("fieldset4.applicant.email.placeholder")}
            type={"email"}
            required
          />
          <TextField
            id={"applicant.phone"}
            $label={t("fieldset4.applicant.phone.label")}
            placeholder={t("fieldset4.applicant.rank.placeholder")}
            type={"tel"}
          />
          <FileField
            id={"corporation.profile"}
            $label={t("fieldset4.corporation.profile.label")}
            placeholder={t("fieldset4.corporation.profile.placeholder")}
          />
          <TextField
            id={"corporation.domain"}
            $label={t("fieldset4.corporation.domain.label")}
            placeholder={t("fieldset4.corporation.domain.placeholder")}
          />
        </Fieldset>
        {/*



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
              $data={t(
                "partnersApply.privacy_term_Section_sec1_detail_summary"
              )}
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
              $data={t(
                "partnersApply.apply_notice_Section_sec1_detail_summary"
              )}
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
          <Button $data={t("partnersApply.Form_Button_cancel")} />*/}
      </form>
    </Article>
  );
};
