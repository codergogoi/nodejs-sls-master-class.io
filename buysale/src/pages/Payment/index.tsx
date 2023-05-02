/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppCSS, Lbl, Spacer } from "../../components";

import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
  PaymentIntentResult,
} from "@stripe/stripe-js";
import { CheckoutForm } from "./PaymentForm";
import { ColDiv } from "../../components/Misc/misc.styled";

interface MakePaymentProps {
  clientSecret: string;
  pk: string;
  totalAmount: number;
  onSuccess: Function;
  onFailed: Function;
}

export const MakePayment: React.FC<MakePaymentProps> = ({
  clientSecret,
  pk,
  totalAmount,
  onSuccess,
  onFailed,
}) => {
  const appearance: Appearance = {
    theme: "flat",
    variables: {
      fontWeightNormal: "500",
      borderRadius: "2px",
      colorBackground: "white",
      colorPrimary: "#DF1B41",
      colorPrimaryText: "white",
      spacingGridRow: "15px",
    },
    rules: {
      ".Label": {
        marginBottom: "6px",
      },
      ".Tab, .Input, .Block": {
        boxShadow: "0px 3px 10px rgba(18, 42, 66, 0.08)",
        padding: "12px",
      },
    },
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  const stripePromise = () => {
    if (pk) {
      return loadStripe(pk);
    }
    return null;
  };

  const displayPaymentForm = () => {
    if (pk && clientSecret) {
      return (
        <Elements options={options} stripe={stripePromise()}>
          <CheckoutForm onHandleReturn={onHandleReturnUrl} />
        </Elements>
      );
    } else {
      return (
        <ColDiv
          style={{
            alignItems: "center",
          }}
        >
          <Lbl title="Loading payment..." />
        </ColDiv>
      );
    }
  };

  const onHandleReturnUrl = async (response: PaymentIntentResult) => {
    console.log("POST PAYMENT RESPONSE", response);
    const { error, paymentIntent } = response;

    if (paymentIntent) {
      if (paymentIntent.status === "succeeded") {
        console.log("Successed");
        onSuccess(response.paymentIntent.id);
      }
    } else {
      console.log("Payment Failed!", error);
      onFailed(error);
    }
  };

  return (
    <ColDiv
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spacer size={4} direction="col" />
      <p style={{ textAlign: "center" }}>
        Your Card will Charge : ${totalAmount}
      </p>
      <Spacer size={4} direction="col" />
      {displayPaymentForm()}
    </ColDiv>
  );
};
