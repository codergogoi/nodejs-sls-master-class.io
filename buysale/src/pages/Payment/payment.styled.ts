import styled from "@emotion/styled";
import { Box, List } from "@mui/material";

export const SearchContainer = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  height: 100vh;
`;

export const PostPaymentContainer = styled(Box)`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`;

export const TotalDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  background: #f7f9fd;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const PaymentOptionSection = styled.div`
  flex: 1;
  display: flex;
  width: 95%;
  padding: 2.5%;
  flex-direction: column;
  background: #fff;
`;

export const PaymentOptionList = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaymentModeCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  min-width: 240px;
  height: 80px;
  border-bottom: 0.2px solid #b7b7b7;
`;

export const PaymentStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(220, 35, 66, 0.2);
  margin-right: 10px;
  height: 25px;
`;
