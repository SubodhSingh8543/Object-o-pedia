import { Box, Center, Divider, Heading } from "@chakra-ui/react";
import React from "react";

const Checkout = () => {
  return (
    <Box>
      <Heading textAlign={"center"} mt={"2rem"} mb={"2rem"}>
        CHECKOUT
      </Heading>
      <Divider />
      <Box
        display={"flex"}
        justifyContent={"center"}
        w={"100%"}
        textAlign={"left"}
        mt={"4rem"}
      >
        <Center height="25rem">
          <Divider orientation="vertical" />
        </Center>
        <Box w={"50%"} h={"25rem"}></Box>
        <Box h={"25rem"} w={"50%"}></Box>
      </Box>
    </Box>
  );
};

export default Checkout;
