/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { CenterBox, ColDiv, RowDiv } from "../../components/Misc/misc.styled";
import { Lbl } from "../../components/Labels";
import { AppCSS, Spacer, TapButton, TxtInput } from "../../components";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoginAPI, RegisterApi } from "../../api/user-api";
import { CartModel, UserModel } from "../../types";
import { userLogin } from "../../state/reducers/userSlice";
import { FetchCartItemsApi } from "../../api/product-api";
import { useAppSelector } from "../../state/hooks";
import { Container } from "../../utils/globalstyled";
import { Stack } from "@mui/material";
import ProductPlaceholder from "../../images/product_placeholder.jpg";
import { CollectPaymentApi } from "../../api/payment-api";
import { MakePayment } from "../Payment";

interface CartProps {}

interface PaymentCredential {
  secret: string;
  publishableKey: string;
}

const CartPage: React.FC<CartProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState<CartModel[]>([]);
  const [appFee, setAppFee] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [paymentCredential, setPaymentCredential] = useState<
    PaymentCredential | false
  >(false);

  const profile = useAppSelector((state) => state.userReducer.userProfile);

  useEffect(() => {
    onGetCartItems();
  }, []);

  const getTotal = () => {
    return appFee + productPrice;
  };

  const onInitPayment = async () => {
    const { data, msg } = await CollectPaymentApi(profile.token);
    if (data) {
      console.log(data);
      const credential = data as PaymentCredential;
      setPaymentCredential(credential);
    } else {
      console.log(`Error: ${msg}`);
    }
  };

  const onGetCartItems = async () => {
    const { data, msg } = await FetchCartItemsApi(profile.token);
    if (data) {
      setAppFee(Number(data.appFee));
      const items = data.cartItems as CartModel[];
      if (Array.isArray(items)) {
        const totalAmount = items.reduce(
          (sum, item) => sum + Number(item.price) * item.item_qty,
          0
        );
        setProductPrice(totalAmount);
      }
      setCartItems(items);
    } else {
      console.log(`Error: ${msg}`);
    }
  };

  const displayCart = () => {
    return cartItems.map((item) => {
      return (
        <RowDiv
          style={{
            justifyContent: "flex-start",
            border: "1px solid #EDEDED",
            margin: 5,
            padding: 10,
          }}
        >
          <div style={{ flex: 2 }}>
            <img
              draggable={false}
              src={ProductPlaceholder}
              alt={"placeholder"}
              style={{
                height: 140,
                width: 140,
              }}
            />
          </div>
          <div
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              height: "100%",
              flexDirection: "column",
              flex: 6,
            }}
          >
            <p
              style={{
                fontSize: 32,
                fontWeight: "600",
                margin: 0,
                padding: 0,
                marginBottom: 20,
              }}
            >
              {item.name}
            </p>
            <a
              style={{ fontSize: 16, textDecoration: "none", color: "#006492" }}
              href="#"
            >
              View product details
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              {item.item_qty}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              ${Number(item.price).toFixed(2)}
            </p>
          </div>
        </RowDiv>
      );
    });
  };

  const cartOption = () => {
    return (
      <Stack
        style={{
          flexDirection: "row",
          width: "100%",
          display: "flex",
        }}
      >
        <Stack
          style={{
            flex: 9,
            padding: 10,
            marginRight: 50,
          }}
        >
          {displayCart()}
        </Stack>
        <ColDiv
          style={{
            flex: 3,
            backgroundColor: "#fff",
            margin: 10,
            border: "1px solid #EDEDED",
            padding: 20,
            height: 260,
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <TapButton
              title="Place Order"
              color={AppCSS.WHITE}
              bgColor={AppCSS.ORANGE}
              onTap={() => onInitPayment()}
              width={220}
              radius={30}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <p>Product price</p>
            <p>${productPrice.toFixed(2)}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>Tax & Fee</p>
            <p>${appFee.toFixed(2)}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: 25,
              fontWeight: "700",
            }}
          >
            <p>Total Amount</p>
            <p>${getTotal().toFixed(2)}</p>
          </div>
        </ColDiv>
      </Stack>
    );
  };

  const paymentOption = () => {
    if (paymentCredential) {
      return (
        <MakePayment
          totalAmount={getTotal()}
          clientSecret={paymentCredential.secret}
          pk={paymentCredential.publishableKey}
          onSuccess={(paymentId: string) => {
            console.log("payment was successful!");
            navigate(`/post-order?id=${paymentId}`);
          }}
          onFailed={() => {
            console.log("payment was not successful!");
            navigate("/failed-order");
          }}
        />
      );
    }
    return <></>;
  };

  return (
    <Container
      style={{
        width: "80%",
        paddingTop: 20,
      }}
    >
      {paymentCredential ? paymentOption() : cartOption()}
    </Container>
  );
};

export default CartPage;
