import React from "react";
import { useTranslation } from "react-i18next";
import { PartnersApplyNotice } from "fxtsx-okinawa/pages/Partners/PartnersApplyNotice";

function PartnersApply() {
  const { t, ready } = useTranslation("partners.apply");
  if (!ready) return null;
  return <PartnersApplyNotice $level={1} />;
}
export default PartnersApply;
