import { useReactPWAInstall } from "react-pwa-install";
import icon from "assets/img/logo.webp";
import Button from "./Button";

const PwaButton = () => {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
  const pwaClick = () => {
    pwaInstall({
      title: "갓생메이커 다운받기",
      logo: icon,
    })
      .then(() => {})
      .catch(() => {});
  };

  return (
    <>
      {supported() && !isInstalled() && (
        <Button click={pwaClick} text="앱 다운받기" theme="dark" />
      )}
    </>
  );
};

export default PwaButton;
