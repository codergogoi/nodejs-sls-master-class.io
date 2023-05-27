import { Box, CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../state/hooks";
import { ConfirmOrder } from "../../api/payment-api";

export const PostOrder = () => {
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const profile = useAppSelector((state) => state.userReducer.userProfile);

  useEffect(() => {
    if (!confirm) {
      setConfirm(true);
      confirmOrder();
    }
  }, []);

  const confirmOrder = async () => {
    const { data, msg } = await ConfirmOrder(profile.token);
    if (data) {
      console.log(JSON.stringify(data));
    } else {
      console.log(`Error: ${msg}`);
    }
    setLoading(false);
  };

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
      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <CircularProgress color="warning" size={120} />
          <h1 style={{ fontSize: 18, fontWeight: "500", margin: 50 }}>
            Your order is processing...
          </h1>
        </Box>
      ) : (
        <h1 style={{ fontSize: 32, fontWeight: "700", margin: 50 }}>
          Thank you for your order! We will notify further steps!
        </h1>
      )}
    </Container>
  );
};
