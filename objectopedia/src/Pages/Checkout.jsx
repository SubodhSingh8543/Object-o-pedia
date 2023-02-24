import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons";
import React, { useState } from "react";
import AddressModal from "../Components/AddressModal";
import OrderSummary from "../Components/OrderSummary";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  const initSum = 0;
  const toast = useToast();
  let sum = cartData.reduce((acc, ele) => acc + ele.price * ele.qty, initSum);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const availCoupon = (coupon) => {
    if (coupon === "trinity") {
      setCouponDiscount(Math.floor(sum / 10));
      toast({
        title: "Applied Successfully",
        description: "You availed discount of 10%",
        variant: "subtle",
        status: "success",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Not Valid",
        description: "You have added wrong coupon",
        variant: "subtle",
        status: "error",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
    }
  };
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
                Vivek Kumar,
                <br /> b-4/67 Agar Nagar Delhi, Prem Nagar
                <br /> New Delhi, Delhi 110086
              </Text>
              <Divider mt={"1rem"} mb={"1rem"} />
              <AddressModal />
            </Box>
            <Button mt={"1rem"} variant={"link"} color={"green.500"} w={"20%"}>
              <Image
                w={"18%"}
                src="https://images.dailyobjects.com/icons/back%20arrow.png"
              />
              <ul>Go Back</ul>
            </Button>
          </Box>
        </Box>
        <Box h={{ md: "25rem" }} w={{ md: "50%" }}>
        <OrderSummary
            totalItem={cartData.length}
            sum={sum}
            couponDiscount={couponDiscount}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
