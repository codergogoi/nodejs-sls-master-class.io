import { RowDiv } from "../../components/Misc/misc.styled";
import { Container } from "../../utils/globalstyled";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { DealsCard } from "./DealsCard";

function Item(props: any) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

const DealsPage = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "https://assetscdn1.paytm.com/images/catalog/view_item/822916/1631529961848.jpg?imwidth=480&impolicy=hq",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "https://images.gizbot.com/fit-in/img/600x338/2019/10/amazon-fab-phone-fest-offers-on-smartphones-dasara-discounts-1570262929.jpg",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img: "https://i.pinimg.com/736x/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg",
    },
  ];

  return (
    <Carousel
      sx={{
        width: "80%",
        paddingLeft: "10%",
        paddingRight: "10%",
        marginBottom: 10,
      }}
    >
      {items.map((item, i) => (
        <DealsCard deal={item} />
      ))}
    </Carousel>
  );
};

export default DealsPage;
