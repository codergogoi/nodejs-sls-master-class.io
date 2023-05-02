import { Box } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

export const device = {
  smalll: `(min-width: 320px)`,
  phone: `(min-width: 480px)`,
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 992px)`,
  wideScreen: `(min-width: 1200px)`,
};

export const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Open_Sans";
        text-transform: none;

    }
`;

export const Container = styled(Box)`
  & {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const LanndingContainer = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  width: 100%;
`;

// /* iPhone Retina */
// @media only screen and (min-width: 320px) {
//  }
// /* Small Devices, Phones */
// @media only screen and (min-width: 480px) {
//  }

// /* Small Devices, Tablets */
// @media only screen and (min-width: 768px) {

// }

// /* Medium Devices, Desktops */
// @media only screen and (min-width: 992px) {

// }

// /* Large Devices, Wide Screens */
// @media only screen and (min-width: 1200px) {

// }

// /* iPhone Retina */
// @media only screen and (min-width: 320px) {
//   height: "100%";
// }
// /* Small Devices, Phones */
// @media only screen and (min-width: 480px) {
//   height: "100%";
// }

// /* Small Devices, Tablets */
// @media only screen and (min-width: 768px) {
//   height: "100%";
// }

// /* Medium Devices, Desktops */
// @media only screen and (min-width: 992px) {
//   height: "100%";
// }

// /* Large Devices, Wide Screens */
// @media only screen and (min-width: 1200px) {
//   height: "100%";
// }
