import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const CenterBox = styled(Box)`
  & {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    height: "100%";

    /* iPhone Retina */
    @media only screen and (min-width: 320px) {
      width: "320px";
    }
    /* Small Devices, Phones */
    @media only screen and (min-width: 480px) {
      width: "320px";
    }

    /* Small Devices, Tablets */
    @media only screen and (min-width: 768px) {
      margin-top: 2rem;
      overflow-y: scroll;
      width: "90%";
    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width: 992px) {
      margin-top: 2rem;
      width: 800px;
    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width: 1200px) {
      margin-top: 3rem;
      width: 800px;
    }
  }
`;

export const RestaurantLogo = styled.img`
  width: 120px;
  height: 120px;
`;

export const SSpacer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const SRoundNest = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ecebeb;
`;

export const MenuBox = styled(Box)`
  & {
    display: flex;
    width: 100%;
    flex-direction: row;
    background: #fff;
    height: 88px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #efefef;
  }
`;

export const LeftNav = styled.div`
  display: flex;
`;

export const RightNav = styled.div`
  display: flex;
`;

export const CenterNav = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoSmall = styled.img`
  width: 42px;
  height: 42px;
`;

export const RowDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ColDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  /* Custom, iPhone Retina */
  @media only screen and (min-width: 320px) {
    flex-direction: column;
    width: 90%;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (min-width: 480px) {
    flex-direction: column;
    width: 90%;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width: 992px) {
    flex-direction: column;
    width: 100%;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ActionCard = styled.div`
  flex: 2,
  display: flex; 
  position: absolute;
  right: 10px;
  top: 10px;
 `;

export const CategoryItems = styled.div`
  display: flex;
  min-height: 480px;
  width: 90%;
  padding: 20px;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 98%;
  padding: 1%;
  overflow-x: scroll;
`;

export const LinkTag = styled.a`
  text-decoration: none;
  color: #434343;
  margin-left: 5px;
  margin-right: 5px;
  &:hover {
    color: #dc2342;
  }
`;

export const FoodCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 5px;
  height: 250px;
  border-radius: 10px;
  width: 170px;
`;

export const FoodPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  width: 96%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0px 0px 10px 10px;
  color: #fff;
  padding: 1%;
  padding-left: 3%;
`;

export const LblFoodPrice = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  font-size: 13pt;
  font-weight: "lighter";
  color: #fff;
  width: 90%;
  text-align: left;
`;

export const LblFoodDesc = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  font-size: 1.1rem;
  font-weight: "100";
  color: #fff;
  width: 90%;
  text-align: left;
`;
