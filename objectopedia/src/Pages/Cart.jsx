import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CartCard from "../Components/CartCard";
import CartAccordion from "../Components/CartAccordion";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../Redux/Cart/cart.actions";
// import { data } from "../mockData";
import OrderSummary from "../Components/OrderSummary";

const Cart = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartData.length === 0) {
      dispatch(getCart());
    }
  }, []);

  return (
    <Box textAlign={"center"}>
      <Image
        src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,w-1233,dpr-1"
        alt="poster"
      />
      <Heading pt={"2rem"} pb={"2rem"}>
        SHOPPING BAG
      </Heading>
      <Divider />
      <Box
        display={{ md: "flex" }}
        justifyContent={"center"}
        w={"100%"}
        textAlign={"left"}
        mt={"4rem"}
      >
        <Box
          w={{ md: "50%" }}
          h={{ md: "25rem" }}
          overflow={{ md: "hidden" }}
          overflowY={{ md: "scroll" }}
        >
          {/* {
        data.map(ele=>{
          return <CartCard key={ele.id} {...ele} />
        })
      } */}
          
        </Box>
        <Box
          w={{ md: "50%" }}
          h={{ md: "25rem" }}
          overflow={{ md: "hidden" }}
          overflowY={{ md: "scroll" }}
        >
          <CartAccordion />
          <Divider />
          <OrderSummary />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
