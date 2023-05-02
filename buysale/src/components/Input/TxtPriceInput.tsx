import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { AppCSS } from "..";

interface PriceInputProps {
  onChange: Function;
  placeholder: string;
  required?: boolean;
  value?: string;
}

export const PriceInput: React.FC<PriceInputProps> = ({
  onChange,
  placeholder,
  required,
  value,
}) => {
  const [price, setPrice] = useState("0.0");
  const [placeHolderPrice, setPlaceholderPrice] = useState("0.0");

  useEffect(() => {
    if (value) {
      setPlaceholderPrice(value);
    }
  }, [value]);

  const onChangePrice = (e: any) => {
    const inputPrice = e.target.value;
    const rx_live = /^[+-]?\d*(?:[.]\d*)?$/;
    if (rx_live.test(inputPrice)) {
      const finalPrice = (+inputPrice).toFixed(2);
      setPrice(inputPrice);
      onChange(finalPrice);
    }
  };

  return (
    <Box
      style={{
        width: "96%",
        flexDirection: "row",
        padding: "1%",
        paddingLeft: "2%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: AppCSS.GRAY_MILD,
        borderRadius: "5px",
        marginTop: "5px",
        marginBottom: "5px",
        height: "38px",
      }}
    >
      <p
        style={{
          color: AppCSS.GRAY_DARK,
          marginRight: "5px",
          fontSize: "1.2rem",
        }}
      >
        $
      </p>
      <input
        style={{
          border: "none",
          height: "100%",
          width: "100%",
          fontSize: "1.1rem",
          background: AppCSS.GRAY_MILD,
        }}
        type="text"
        id="depositedAmount"
        maxLength={6}
        pattern="[+-]?\d+(?:[.]\d+)?"
        placeholder={placeHolderPrice ? placeHolderPrice : placeholder}
        onChange={onChangePrice}
      />
      {required && (
        <p
          style={{
            fontSize: 32,
            color: AppCSS.RED,
            zIndex: 200,
          }}
        >
          *
        </p>
      )}
    </Box>
  );
};
