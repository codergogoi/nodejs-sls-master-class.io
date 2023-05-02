import { Container } from "@mui/material";
import { useEffect } from "react";

export const FailedOrder = () => {
  useEffect(() => {}, []);

  return (
    <Container
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: "700", margin: 50 }}>
        Payment failed!
      </h1>
    </Container>
  );
};
