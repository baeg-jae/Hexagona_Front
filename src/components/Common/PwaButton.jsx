import React from "react";
import { useReactPWAInstall } from "react-pwa-install";
import icon from "assets/img/logo.png";
import styled from "@emotion/styled";

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
    <div>
      {supported() && !isInstalled() && (
        <Button onClick={pwaClick}>앱 다운받기</Button>
      )}
    </div>
  );
};

export default PwaButton;

const Button = styled.button`
  width: 327px;
  height: 56px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  background-color: #956c4a;
  color: var(--white);
`;
