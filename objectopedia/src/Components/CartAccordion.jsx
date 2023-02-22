import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Image,
    Input,
    ListItem,
    Text,
    UnorderedList,
  } from "@chakra-ui/react";
  import React from "react";
  
  const CartAccordion = () => {
    return (
      <Box w={"70%"} m={"auto"}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton p={"1rem"}>
                <Box
                  as="span"
                  display={"flex"}
                  color={"green.500"}
                  gap={"1rem"}
                  flex="1"
                  textAlign="left"
                >
                  <Image
                    w={"2rem"}
                    src="https://images.dailyobjects.com/marche/offer/coupon-icon-green.png?tr=cm-pad_resize,v-2"
                  />
                  COUPONS & OFFERS
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box
                display={"flex"}
                bg={"#f7f7f7"}
                h={"3rem"}
                color={"green.500"}
                alignItems={"center"}
                p={"1rem"}
              >
                <Input placeholder={"Type coupon code here"} border={"0"} />
                <Button variant={"ghost"}>APPLY</Button>
              </Box>
              <Box bg={"#f7f7f7"} fontSize={"smaller"} mt={"2rem"} p={"1rem"}>
                <Text fontWeight={"bold"} color={"green.500"}>
                  ADDITIONAL OFFERS ON YOUR CART
                </Text>
                <Box>
                  <UnorderedList lineHeight={"1.7"}>
                    <ListItem>Buy Any 3 Apple Watchbands @ Rs.2499 Only</ListItem>
                    <ListItem>
                      Buy Any 3 Universal Watchbands @ Rs.999 Only
                    </ListItem>
                    <ListItem>Buy 1 Get 1 Free On Cases & Sale Category</ListItem>
                    <ListItem>
                      Free Camper Keychain Clip Set of 2 On Orders Above Rs. 1999
                    </ListItem>
                    <ListItem>Free Duffle Bag On Orders Above Rs. 2999</ListItem>
                    <ListItem>
                      Get Assured Cashback Up to Rs. 250 On Orders Above INR 1499
                      Via MobiKwik
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>
  
          <AccordionItem>
            <h2>
              <AccordionButton p={"1rem"}>
                <Box
                  as="span"
                  display={"flex"}
                  color={"green.500"}
                  gap={"1rem"}
                  flex="1"
                  textAlign="left"
                >
                  <Image
                    w={"2rem"}
                    src="https://images.dailyobjects.com/marche/icons/gift-card-logo.png?tr=cm-pad_resize,v-2"
                  />
                  REDEEM GIFT CARD
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text fontSize={"smaller"} fontWeight={"bold"}>
                E-GIFT CARD CREDENTIALS
              </Text>
              <Box display={"flex"} justifyContent={"space-between"} mt={"1rem"}>
                <Input
                  placeholder="E-Gift card Number"
                  bg={"#f7f7f7"}
                  w={"65%"}
                />
                <Input placeholder="Pin" w={"25%"} bg={"#f7f7f7"} />
              </Box>
              <Button bg={"green.500"} mt={"2rem"} h={'3rem'} w={"100%"} color={"white"}>
                APPLY
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    );
  };
  
  export default CartAccordion;
  