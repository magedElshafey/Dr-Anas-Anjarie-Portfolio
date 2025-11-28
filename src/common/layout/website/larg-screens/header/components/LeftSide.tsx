import { useTranslation } from "react-i18next";
const LeftSide = () => {
  const { t } = useTranslation();
  return <p>{t("reliable UK Patient information")}</p>;
};

export default LeftSide;
