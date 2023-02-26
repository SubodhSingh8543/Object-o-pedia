import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { deleteCartApi } from "../Redux/Cart/cart.api";

const DebitModal = ({ addtoOrders }) => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const payWithCard = () => {
    addtoOrders(cartData);
    console.log(cartData);
    navigate("/");
    toast({
      title: "Payment Done",
      description: "Item will be deilivered within 7 working days",
      variant: "subtle",
      status: "success",
      position: "top-right",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <>
      <Button onClick={onOpen} color={"green.500"} w={"60%"}>
        <ul>Credit/Debit Card</ul>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent overflow={"hidden"} overflowY={"scroll"} maxH={"30rem"}>
          <ModalHeader>ADD NEW ADDRESS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>DEBIT/CREDIT CARD NO.</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter debit/credit card no"
                      />
                    </FormControl>
                    <HStack>
                      <Box>
                        <FormControl isRequired>
                          <FormLabel>Valid (MM/YY)</FormLabel>
                          <Input type="date" placeholder="state" />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl isRequired>
                          <FormLabel>CVV</FormLabel>
                          <Input type="number" placeholder="CVV" />
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl isRequired>
                      <FormLabel>NAME ON CARD</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter your name on card"
                      />
                    </FormControl>

                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        onClick={payWithCard}
                      >
                        Pay with Card
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DebitModal;
