import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const SBtnRed = styled(Button)`
  & {
    background: #dc2342;
    color: #ffff;
    height: 52px;
    width: 80%;
    max-width: 480px;
    margin: 10px;
    margin-bottom: 100px;
    text-transform: none;
    font-size: 11pt;
    &:hover {
      background: #ff7bad;
    }
  }
`;

export const SBtnMenu = styled(Button)`
  & {
    background: none;
    color: #ffff;
  }
`;

export const SBtnWithBg = styled.button`
  background: #f7f7f7;
  color: #ffff;
  border-radius: 5px;
  min-height: 38px;
  border: none;
  min-width: 42px;
  margin-left: 10px;
`;

export const SBtnWhiteClose = styled.button`
  background: #f7f7f7;
  color: #000;
  border-radius: 13px;
  border: none;
  height: 26px;
  width: 26px;
  font-size: 12pt;
  text-align: center;
  margin: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const SBtnGeneric = styled(Button)`
  & {
    background: #dc2342;
    color: #ffff;
    height: 52px;
    width: 90%;
    max-width: 420px;
    margin: 5px;
    text-transform: none;
    font-size: 11pt;
    font-weight: 400;
    &:hover {
      background: #dc2342;
    }
  }
`;

export const SFreeButton = styled(Button)`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    color: #ffff;
    text-transform: none;
  }
`;
