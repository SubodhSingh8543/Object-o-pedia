import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons";
import React from "react";
import AddressModal from "../Components/AddressModal";

const Checkout = () => {
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

export default Checkout;
