import { Button, Stack } from "@mui/material";
import { DealsModel } from "../../types/models/deals-model";
import { ColDiv } from "../../components/Misc/misc.styled";

interface DealsCardProps {
  deal: DealsModel;
}

export const DealsCard: React.FC<DealsCardProps> = ({ deal }) => {
  const { name, description, img } = deal;
  return (
    <Stack
      spacing={2}
      flexDirection="row"
      style={{ width: "90%", height: 280 }}
    >
      <ColDiv
        style={{
          flex: "4",
          padding: 10,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <p style={{ fontSize: 50, fontWeight: "900", color: "#C70039" }}>
          {name}
        </p>
        <p
          style={{
            fontSize: "1.2rem",
          }}
        >
          {description}
        </p>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          style={{
            borderColor: "#fff",
            backgroundColor: "#019C89",
            color: "#FFF",
          }}
        >
          View details
        </Button>
      </ColDiv>
      <img
        style={{ flex: 8 }}
        src={`${img}?w=164&h=164&fit=crop&auto=format`}
        alt={name}
        loading="lazy"
      />
    </Stack>
  );
};
