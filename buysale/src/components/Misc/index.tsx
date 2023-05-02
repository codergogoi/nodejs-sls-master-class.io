import { SSpacer } from "./misc.styled";

interface SpacerProps {
  direction?: "row" | "col";
  size?: number;
}

export const Spacer: React.FC<SpacerProps> = ({
  direction = "col",
  size = 2,
}) => {
  return (
    <SSpacer
      sx={{
        mt: direction === "col" ? `${size || 0}rem` : 0,
        ml: direction === "row" ? `${size || 0}rem` : 0,
      }}
    ></SSpacer>
  );
};
