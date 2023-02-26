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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../Redux/checkout/checkout.actions";
import { useUserAuth } from "../context/UserAuthContext";

function AddressModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const singleUserData = useSelector((res) => res.AuthReducer.singleUser);
  const { user } = useUserAuth();
  const dispatch = useDispatch();
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const toast = useToast();
  const handleUpdateAddress = () => {
    const newAddress = {
      pincode,
      city,
      state,
      country,
      flat,
      area,
    };
    if (singleUserData) {
      dispatch(updateAddress(newAddress, user.uid));
      toast({
        title: "Address updated",
        description: "Address has been saved",
        variant: "subtle",
        status: "success",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    }
  };

  return (
    <>
      <Button onClick={onOpen} color={"green.500"} w={"25%"}>
        <ul>{singleUserData.address ? "Change" : "Add Address"}</ul>
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
                    <HStack>
                      <Box>
                        <FormControl id="pincode">
                          <FormLabel>Pincode</FormLabel>
                          <Input
                            type="number"
                            placeholder="pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                          />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName" isRequired>
                          <FormLabel>City</FormLabel>
                          <Input
                            type="text"
                            placeholder="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </FormControl>
                      </Box>
                    </HStack>
                    <HStack>
                      <Box>
                        <FormControl isRequired>
                          <FormLabel>State</FormLabel>
                          <Input
                            type="text"
                            placeholder="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl isRequired>
                          <FormLabel>Country</FormLabel>
                          <Input
                            type="text"
                            placeholder="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl isRequired>
                      <FormLabel>Flat No./building, street name</FormLabel>
                      <Input
                        type="text"
                        placeholder="flat"
                        value={flat}
                        onChange={(e) => setFlat(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Area/Locality</FormLabel>
                      <Input
                        type="text"
                        placeholder="area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
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
                        onClick={handleUpdateAddress}
                      >
                        Add Address
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
}

export default AddressModal;
