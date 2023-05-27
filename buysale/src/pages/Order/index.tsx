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
import { FetchOrderItemsApi } from "../../api/product-api";
import { useAppSelector } from "../../state/hooks";
import { Container } from "../../utils/globalstyled";
import { OrderModel } from "../../types/models/order-model";

interface OrderProps {}

interface PaymentCredential {
  secret: string;
  publishableKey: string;
}

const OrderPage: React.FC<OrderProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [orderItems, setOrderItems] = useState<OrderModel[]>();

  const profile = useAppSelector((state) => state.userReducer.userProfile);

  useEffect(() => {
    onGetOrderItems();
  }, []);

  const onGetOrderItems = async () => {
    const data = await FetchOrderItemsApi(profile.token);
    if (data) {
      if (data.orders) {
        setOrderItems([data.orders as OrderModel]);
      }
    }
  };

  const displayOrder = () => {
    if (Array.isArray(orderItems)) {
      return orderItems.map((item) => {
        return (
          <RowDiv
            style={{
              justifyContent: "flex-start",
              border: "1px solid #EDEDED",
              margin: 5,
              padding: 10,
            }}
          >
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
                  fontSize: 22,
                  fontWeight: "600",
                  margin: 0,
                  padding: 0,
                  marginBottom: 20,
                }}
              >
                {` Order Number: ${item.order_ref_id}`}
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
                  fontSize: 22,
                  fontWeight: "600",
                }}
              >
                {`Status: ${item.status}`}
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
                  fontSize: 22,
                  fontWeight: "600",
                }}
              >
                {`Amount:   $${Number(item.amount / 100).toFixed(2)}`}
              </p>
            </div>
          </RowDiv>
        );
      });
    } else {
      return (
        <p
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          No orders available!
        </p>
      );
    }
  };

  return (
    <Container
      style={{
        width: "80%",
        paddingTop: 20,
      }}
    >
      {displayOrder()}
    </Container>
  );
};

export default OrderPage;
