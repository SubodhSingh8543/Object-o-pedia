import { Box, Button, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderSummary = ({ totalItem, sum, couponDiscount }) => {
  const discount = Math.floor(sum / 5) + couponDiscount;
  const GT = sum - discount - couponDiscount;
  const location = useLocation();
  let path = "";
  if (location.pathname === "/cart") {
    path = "/checkout";
  } else if (location.pathname === "/checkout") {
    path = "/payment";
  }
  return (
    <Box w={"70%"} m={"auto"} mt={"1rem"} p={"1rem"}>
      <Text fontSize={"xl"} fontWeight={"semibold"}>
        ORDER SUMMARY
      </Text>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Text>Item Total ({totalItem} items)</Text>
          <Text color={"orange.400"}>Discount</Text>
          <Text>Shipping</Text>
        </Box>
        <Box textAlign={"right"}>
          <Text fontWeight={"bold"}>Rs.{sum}</Text>
          <Text color={"orange.400"} fontWeight={"bold"}>
            Rs.{discount}
          </Text>
          <Text color={"orange.400"} fontWeight={"bold"}>
            FREE
          </Text>
        </Box>
      </Box>
      <Divider />
      <Box display={"flex"} mt={"1rem"} justifyContent={"space-between"}>
        <Box>
          <Text fontWeight={"medium"}>Grand Total ({totalItem} items)</Text>
          <Text>(Inclusive of Taxes)</Text>
        </Box>
        <Box textAlign={"right"}>
          <Text fontWeight={"bold"}>Rs.{GT}</Text>
          <Text color={"orange.400"}>You saved Rs.{discount}</Text>
        </Box>
      </Box>
      <Link to={path}>
        {location.pathname !== "/payment" ? (
          <Button
            bg={"green.500"}
            variant={"link"}
            h={"3rem"}
            w={"100%"}
            color={"white"}
          >
            CHECKOUT
          </Button>
        ) : null}
      </Link>
    </Box>
  );
};

export default OrderSummary;
