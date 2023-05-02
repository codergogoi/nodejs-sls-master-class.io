import styled from "@emotion/styled";
import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";

export const SInputField = styled(TextField)`
  display: flex;
  color: #1a1824;
  background: #faf9f7;
  width: 99%;
`;

export const SInput = styled(TextField)`
  & {
    display: flex;
    width: 100%;
    color: #1a1824;
  }
`;

export const SMultilineInput = styled(TextField)`
  & {
    display: flex;
    width: 90%;
    min-height: 80px;
    color: #1a1824;
  }
`;

export const SPhoneDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SFlagDiv = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-around;
  align-items: center;
`;

export const SFileUpload = styled(Button)`
  & {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 42px;
    border-radius: 4px;
    color: #1a1824;
    background: #faf9f7;
    text-transform: none;
  }
`;
