import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container } from "../../utils/globalstyled";
import DealsPage from "../Deals";
import { Stack } from "@mui/material";
import { RowDiv } from "../../components/Misc/misc.styled";
import { CategorySlider } from "../Category/CategorySlider";
import { useAppSelector } from "../../state/hooks";
import { UserModel } from "../../types";
import { userLogin } from "../../state/reducers/userSlice";
import { Spacer } from "../../components";

interface LandingPageProps {
  dashboard?: ReactNode;
}

const LandingPage: React.FC<LandingPageProps> = ({ dashboard }) => {
  // final container to track progress
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem("token");
    if (userData !== null) {
      const auth = { token: userData } as unknown as UserModel;
      dispatch(userLogin(auth));
    }
  }, []);

  return (
    <Stack spacing={1} style={{ alignItems: "center" }}>
      <DealsPage />
      <CategorySlider />
    </Stack>
  );
};

export default LandingPage;
