import { Button } from "@mui/material";
import { ReactNode } from "react";
import { AppCSS } from "..";

interface BtnProps {
  onTap: React.MouseEventHandler<HTMLButtonElement> | undefined;
  bgColor?: string;
  color?: string;
  selected?: boolean;
  width?: number;
  height?: number;
  borderColor?: string;
  radius?: number;
  content: ReactNode;
}

export const DragButton: React.FC<BtnProps> = ({
  onTap,
  bgColor,
  color,
  width,
  height,
  borderColor,
  radius,
  content,
}) => {
  return (
    <Button
      style={{
        textTransform: "none",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: bgColor ? bgColor : AppCSS.RED,
        color: color ? color : AppCSS.WHITE,
        width: width ? width : "100%",
        height: height ? `${height}px` : "100%",
        border: borderColor ? `2px solid ${borderColor}` : `none`,
        borderRadius: radius ? `${radius}px` : "4px",
        margin: "5px",
      }}
      onClick={onTap}
    >
      {content}
    </Button>
  );
};
