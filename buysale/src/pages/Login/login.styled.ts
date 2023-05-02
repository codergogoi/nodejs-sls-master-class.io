import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const LoginContainer = styled(Box)`
  height: "100%";
  /* iPhone Retina */
  @media only screen and (min-width: 320px) {
    overflow: "hidden";
  }
  /* Small Devices, Phones */
  @media only screen and (min-width: 480px) {
    overflow: "hidden";
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    padding-top: 2%;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width: 992px) {
    padding-top: 5%;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width: 1200px) {
    padding-top: 5%;
  }
`;

export const BtnCreateParty = styled(Button)`
  background: #dc2342;
  color: #ffff;
  height: 42px;
  width: 80%;
  max-width: 480px;
  margin: 10px;
  text-transform: none;
  font-size: 11pt;
`;

export const BtnJoinParty = styled(Button)`
  & {
    background: #000000;
    color: #ffff;
    height: 42px;
    width: 80%;
    max-width: 480px;
    margin: 10px;
    margin-bottom: 100px;
    text-transform: none;
    font-size: 11pt;
  }
`;

export const TxtPunchLine = styled.label`
  font-size: 32pt;
  color: #1a1824;
  text-align: center;
  margin: 10px;
`;

export const TxtFeatureDetails = styled.label`
  font-size: 12pt;
  color: #979797;
  text-align: center;
  padding: 10px;
  margin: 10px;
  line-height: 140%;
  margin-left: 30px;
  margin-right: 30px;
`;
export const BGImage = styled.img`
  display: flex;
  width: 100%;
  position: "absolute";
  z-index: -100;
`;
