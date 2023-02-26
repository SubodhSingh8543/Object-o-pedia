import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AddressModal from "../Components/AddressModal";
import OrderSummary from "../Components/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { useUserAuth } from "../context/UserAuthContext";
import { getAddress } from "../Redux/checkout/checkout.actions";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  const checkoutData = useSelector((store) => store.checkoutReducer.address);
  const { user } = useUserAuth();
  const initSum = 0;

  const dispatch = useDispatch();
  let sum = cartData.reduce((acc, ele) => acc + ele.price * ele.qty, initSum);
  const [couponDiscount, setCouponDiscount] = useState(0);

  useEffect(() => {
    dispatch(getAddress(user.uid));
  }, []);
  // console.log(userData);
  return (
    <Box>
      <Heading textAlign={"center"} mt={"4rem"} mb={"2rem"}>
        CHECKOUT
      </Heading>
      <Divider />
      <Box
        display={{ md: "flex" }}
        justifyContent={"center"}
        w={"100%"}
        textAlign={"left"}
        mt={"4rem"}
      >
        <Center height={{ md: "25rem" }}>
          <Divider orientation="vertical" />
        </Center>
        <Box w={{ md: "50%" }} h={{ md: "25rem" }}>
          <Box p={"4rem"}>
            <Box
              p={"1rem"}
              bg={"#f7f7f7"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Text fontWeight={"bold"}>SHIPPING ADDRESS</Text>
              <Text>
                {checkoutData?.flat} <br />
                {checkoutData?.area}, {checkoutData?.state},{" "}
                {checkoutData?.pincode}
                ,<br /> {checkoutData?.city}, {checkoutData?.country} <br />
              </Text>
              <Divider mt={"1rem"} mb={"1rem"} />
              <AddressModal />
            </Box>
            <Button mt={"1rem"} variant={"link"} color={"green.500"} w={"20%"}>
              <Image
                w={"18%"}
                src="https://images.dailyobjects.com/icons/back%20arrow.png"
              />
              <Link to="/cart"><ul>Go Back</ul></Link>
            </Button>
          </Box>
        </Box>
        <Box h={{ md: "25rem" }} w={{ md: "50%" }}>
          <OrderSummary
            totalItem={cartData?.length}
            sum={sum}
            couponDiscount={couponDiscount}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
