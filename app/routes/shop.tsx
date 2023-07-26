import React from "react";
import { useTranslation } from "react-i18next";

function Shop() {
  const { t } = useTranslation();
  return <div>{t("shopGuide.H")}</div>;
}
export default Shop;
