import { ReactNode } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import { AppCSS } from "..";
import { Button, Fab } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

interface IconButtonProps {
  icon: ReactNode;
  onTap: Function;
  background?: string;
  noBorder?: boolean;
}

export const ButtonWithIcon: React.FC<IconButtonProps> = ({
  onTap,
  background,
  icon,
  noBorder,
}) => {
  return (
    <Fab
      size={"medium"}
      onClick={() => onTap()}
      sx={{
        background: background ? `${background}` : "none",
        border: noBorder ? "none" : "1px solid #EBEAED",
        boxShadow: "none",
      }}
      variant="circular"
    >
      {icon}
    </Fab>
  );
};

interface RoundButtonProps {
  onTap: Function;
}

export const DeleteButton: React.FC<RoundButtonProps> = ({ onTap }) => {
  return (
    <ButtonWithIcon
      background={AppCSS.RED_LIGHT}
      onTap={onTap}
      icon={
        <DeleteIcon
          sx={{ width: "16px", height: "16px", color: `${AppCSS.RED}` }}
        />
      }
    />
  );
};

export const EditRedButton: React.FC<RoundButtonProps> = ({ onTap }) => {
  return (
    <ButtonWithIcon
      background={"none"}
      onTap={onTap}
      icon={
        <EditIcon
          sx={{ width: "16px", height: "16px", color: `${AppCSS.RED}` }}
        />
      }
    />
  );
};

export const EditButton: React.FC<RoundButtonProps> = ({ onTap }) => {
  return (
    <ButtonWithIcon
      background={AppCSS.BLUE_LIGHT}
      onTap={onTap}
      icon={
        <EditIcon
          sx={{ width: "16px", height: "16px", color: `${AppCSS.BLUE}` }}
        />
      }
    />
  );
};

export const CloseButton: React.FC<RoundButtonProps> = ({ onTap }) => {
  return (
    <ButtonWithIcon
      background={AppCSS.WHITE}
      onTap={onTap}
      icon={
        <CloseIcon
          sx={{ width: "16px", height: "16px", color: `${AppCSS.GRAY}` }}
        />
      }
    />
  );
};

export const ButtonWithArrow: React.FC<{ onTap: Function; title: string }> = ({
  onTap,
  title,
}) => {
  return (
    <Button
      disableElevation
      style={{
        textTransform: "none",
        fontWeight: "bold",
        fontSize: 13,
        color: AppCSS.RED,
        width: "60px",
        justifyContent: "flex-start",
        padding: "5px 2px 5px 0px",
        background: "none",
      }}
      onClick={() => onTap()}
      variant="contained"
      endIcon={
        <ChevronRight
          style={{
            marginLeft: -8,
          }}
        />
      }
    >
      {title}
    </Button>
  );
};
