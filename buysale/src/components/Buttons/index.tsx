/* eslint-disable jsx-a11y/alt-text */
import {
  SBtnGeneric,
  SBtnMenu,
  SBtnRed,
  SBtnWhiteClose,
  SBtnWithBg,
} from "./buttons.styled";
import menu_icon from "../../images/menu_icon.svg";
import cart_icon from "../../images/cart_icon.svg";
import filter_icon from "../../images/filter_icon.svg";
import notification_icon from "../../images/notification.svg";
import { AppCSS } from "..";
import { Box, Button } from "@mui/material";
import React from "react";
import { ButtonWithIcon, DeleteButton } from "./ButtonWithIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import { RowDiv } from "../Misc/misc.styled";

interface BtnProps {
  onTap: React.MouseEventHandler<HTMLButtonElement> | undefined;
  title?: string;
  bgColor?: string;
  color?: string;
  selected?: boolean;
  width?: number;
  height?: number;
  isLeft?: boolean;
  borderColor?: string;
  radius?: number;
  disable?: boolean;
}

export const TapButton: React.FC<BtnProps> = ({
  onTap,
  title,
  bgColor,
  color,
  width,
  height,
  isLeft,
  borderColor,
  radius,
  disable,
}) => {
  return (
    <SBtnGeneric
      disabled={disable}
      style={{
        flexDirection: "row",
        background: bgColor ? bgColor : AppCSS.RED,
        color: color ? color : AppCSS.WHITE,
        width: width ? width : "96%",
        height: height ? `${height}px` : "52px",
        justifyContent: isLeft ? "flex-start" : "center",
        border: borderColor ? `1px solid ${borderColor}` : `none`,
        borderRadius: radius ? `${radius}px` : "4px",
      }}
      onClick={onTap}
    >
      {title}
    </SBtnGeneric>
  );
};

/// old
export const LinkBtn: React.FC<BtnProps> = ({
  onTap,
  title,
  bgColor,
  color,
  width,
  isLeft,
}) => {
  return (
    <SBtnGeneric
      style={{
        flexDirection: "row",
        background: bgColor ? bgColor : AppCSS.RED,
        color: color ? color : AppCSS.WHITE,
        width: width ? width : "100%",
        justifyContent: isLeft ? "flex-start" : "center",
        marginRight: "50px",
      }}
      onClick={onTap}
    >
      {title}
    </SBtnGeneric>
  );
};

export const BtnRed: React.FC<BtnProps> = ({ onTap, title }) => {
  return <SBtnRed onClick={onTap}>{title}</SBtnRed>;
};

export const BtnMenuItem: React.FC<BtnProps> = ({ onTap }) => {
  return (
    <SBtnMenu onClick={onTap}>
      <img src={menu_icon} width={20} height={20} />
    </SBtnMenu>
  );
};

export const BtnMenuItemShopping: React.FC<BtnProps> = ({ onTap }) => {
  return (
    <SBtnMenu onClick={onTap}>
      <img src={cart_icon} width={20} height={20} />
    </SBtnMenu>
  );
};

export const BtnNotification: React.FC<BtnProps> = ({ onTap }) => {
  return (
    <SBtnMenu onClick={onTap}>
      <img src={notification_icon} width={20} height={20} />
    </SBtnMenu>
  );
};

export const BtnFilter: React.FC<BtnProps> = ({ onTap }) => {
  return (
    <SBtnWithBg onClick={onTap}>
      <img src={filter_icon} width={20} height={20} />
    </SBtnWithBg>
  );
};

export const BtnWhiteClose: React.FC<BtnProps> = ({ onTap }) => {
  return <SBtnWhiteClose onClick={onTap}>x</SBtnWhiteClose>;
};

export const BtnTip: React.FC<BtnProps> = ({
  onTap,
  title,
  bgColor,
  color,
  selected,
}) => {
  return (
    <SBtnGeneric
      style={{
        background: selected ? AppCSS.RED_LIGHT : AppCSS.GRAY_LIGHT,
        color: selected ? AppCSS.RED : AppCSS.GRAY,
        height: "90px",
        width: "90px",
        borderRadius: "45px",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16pt",
      }}
      onClick={onTap}
    >
      {title}
    </SBtnGeneric>
  );
};

// Optimised Button
interface TapButtonDeleteProps {
  onTap: Function;
  defaultBg?: string;
  selected?: boolean;
  key?: string;
  title?: string;
  borderColor?: string;
  radius?: number;
}

export const TapButtonWithDelete: React.FC<TapButtonDeleteProps> = ({
  onTap,
  defaultBg,
  selected,
  key,
  title,
  borderColor,
  radius,
}) => {
  return (
    <Box
      key={key}
      style={{
        display: "flex",
        flexBasis: "row",
        maxWidth: "200px",
        height: "38px",
        border: `1px solid ${borderColor}`,
        justifyContent: "center",
        alignItems: "center",
        margin: "5px",
        padding: "5px",
        borderRadius: `${radius}px`,
        background: `${
          selected ? AppCSS.RED : defaultBg ? defaultBg : AppCSS.WHITE
        }`,
      }}
    >
      <TapButton
        onTap={() => onTap()}
        bgColor="none"
        color={selected ? AppCSS.WHITE : AppCSS.GRAY}
        key={`${key}-0`}
        title={title}
      />
    </Box>
  );
};

export * from "./DragableButtons";
export * from "./ButtonWithIcon";
