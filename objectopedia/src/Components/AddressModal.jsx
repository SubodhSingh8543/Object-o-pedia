import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

function AddressModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} color={"green.500"} w={"20%"}>
        <ul>Change</ul>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent overflow={'hidden'} overflowY={'scroll'} maxH={'30rem'}>
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
                        <FormControl id="firstName" isRequired>
                          <FormLabel>Full Name</FormLabel>
                          <Input type="text"  />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName" isRequired>
                          <FormLabel>Mobile</FormLabel>
                          <Input type="number" />
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <HStack>
                      <Box>
                        <FormControl id="firstName" isRequired>
                          <FormLabel>Pincode</FormLabel>
                          <Input type="number"  />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName" isRequired>
                          <FormLabel>City</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </Box>
                    </HStack>
										<HStack>
                      <Box>
                        <FormControl id="firstName" isRequired>
                          <FormLabel>State</FormLabel>
                          <Input type="text"  />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName" isRequired>
                          <FormLabel>Country</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </Box>
                    </HStack>
										<FormControl id="email" isRequired>
                      <FormLabel>Flat No./building, street name</FormLabel>
                      <Input type="email" />
                    </FormControl>
										<FormControl id="email" isRequired>
                      <FormLabel>Area/Locality</FormLabel>
                      <Input type="email" />
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
