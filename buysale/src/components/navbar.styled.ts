import styled from "@emotion/styled";
import { AppBar, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const NavAppBar = styled(AppBar)`
  display: flex;
  width: 100%;
  background: #fff;
  min-height: 72px;
  border: 1px solid #efefef;
`;

export const LeftIcon = styled(IconButton)`
  margin-right: 0;
  margin-left: 10%;
  color: #414141;

  /* Custom,
  iPhone Retina */
  @media only screen and (min-width: 320px) {
    margin-left: 1%;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (min-width: 480px) {
    margin-left: 1%;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    margin-left: 5%;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width: 992px) {
    margin-left: 10%;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width: 1200px) {
    margin-left: 15%;
  }
`;

export const RightNav = styled(Box)`
  
  &{
    flex: 1,
    display: flex;
    display: { xs: 'flex', md: 'none' }

  }
`;

export const NavLink = styled(Link)`
  & {
    background: #fff;
    list-style: none;
    color: #414141;
    text-decoration: none;
    padding: 7px;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    margin-right: 10px;

    &:hover {
      background: #ff5733;
      color: #fff;
    }
  }
`;

export const NavLinkNormal = styled(Link)`
  & {
    display: "flex";
    background: #fff;
    list-style: none;
    color: #ff5733;
    text-decoration: none;
    padding: 7px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const LogoSmall = styled.img`
  width: 160px;
`;
