import { Box, Button, Divider, Text } from "@chakra-ui/react";
import React from "react";

const OrderSummary = () => {
  return (
    <Box w={"70%"} m={"auto"} mt={"1rem"} p={"1rem"}>
      <Text fontSize={"xl"} fontWeight={"semibold"}>
        ORDER SUMMARY
      </Text>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Text>Item Total (2 items)</Text>
          <Text color={"orange.400"}>Discount</Text>
          <Text>Shipping</Text>
        </Box>
        <Box textAlign={"right"}>
          <Text fontWeight={"bold"}>Rs.4198</Text>
          <Text color={"orange.400"} fontWeight={"bold"}>
            Rs.1999
          </Text>
          <Text color={"orange.400"} fontWeight={"bold"}>
            FREE
          </Text>
        </Box>
      </Box>
      <Divider />
      <Box display={"flex"} mt={"1rem"} justifyContent={"space-between"}>
        <Box>
          <Text fontWeight={"medium"}>Grand Total (2 items)</Text>
          <Text>(Inclusive of Taxes)</Text>
        </Box>
        <Box textAlign={"right"}>
          <Text fontWeight={"bold"}>Rs.2199</Text>
          <Text color={"orange.400"}>You saved Rs.1999</Text>
        </Box>
      </Box>
      <Button
        bg={"green.500"}
        variant={"link"}
        h={"3rem"}
        w={"100%"}
        color={"white"}
      >
        CHECKOUT
      </Button>
    </Box>
  );
};

export default OrderSummary;
