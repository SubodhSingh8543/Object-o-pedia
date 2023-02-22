import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import CartCard from "../Components/CartCard";
import CartAccordion from "../Components/CartAccordion";

const Cart = () => {
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
        display={"flex"}
        justifyContent={"center"}
        w={"100%"}
        textAlign={"left"}
        mt={"4rem"}
      >
        <Box w={"50%"} h={"25rem"} overflow={"hidden"} overflowY={"scroll"}>
          <CartCard />
        </Box>
        <Box overflow={"hidden"} h={"25rem"} overflowY={"scroll"} w={"50%"}>
          <CartAccordion />
          <Divider />
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
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
