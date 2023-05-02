/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { SLblHeadline, SLblLarge, SLblOptions } from "./labels.styled";
import css from "csstype";

interface LblProps {
  title: string;
  isLight?: boolean;
  size?: number;
  width?: number;
  height?: number;
  flex?: number;
  color?: string;
  align?: css.Property.TextAlign;
  bold?: number;
}
export const LblLarge: React.FC<LblProps> = ({ title, isLight, size }) => {
  return (
    <SLblLarge
      style={{
        fontWeight: isLight ? "200" : "normal",
        fontSize: size ? `${size}pt` : "30pt",
      }}
    >
      {title}
    </SLblLarge>
  );
};

export const LblHeadline: React.FC<{ title: string }> = ({ title }) => {
  return <SLblHeadline>{title}</SLblHeadline>;
};

export const LblOption: React.FC<{ title: string }> = ({ title }) => {
  return <SLblOptions>{title}</SLblOptions>;
};

export const Lbl: React.FC<LblProps> = ({
  title,
  isLight,
  size,
  width,
  flex,
  color,
  align = "left",
  bold,
  height,
}) => {
  return (
    <SLblLarge
      className="qrlabel"
      style={{
        fontWeight: bold ? bold : isLight ? "200" : "normal",
        fontSize: size ? `${size}pt` : "16pt",
        width: width ? `${width}px` : "90%",
        height: height ? `${height}px` : "100%",
        flex: flex ? flex : 1,
        color: color ? color : "#000",
        textAlign: align,
        paddingLeft: 0,
      }}
    >
      {title}
    </SLblLarge>
  );
};
