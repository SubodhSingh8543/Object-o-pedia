import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import OrderSummary from "../Components/OrderSummary";

const Payment = () => {
  return (
    <Box>
      <Box>
        <Heading textAlign={"center"} mt={"4rem"} mb={"2rem"}>
          PAYMENT
        </Heading>
        <Divider />
      </Box>
      <Box
        display={{ md: "flex" }}
        justifyContent={"center"}
        w={"100%"}
        textAlign={"left"}
        mt={"4rem"}
      >
        <Box
          w={{ md: "50%" }}
          h={{ md: "25rem" }}
          overflow={{ md: "hidden" }}
          overflowY={{ md: "scroll" }}
        >
          <Box w={'60%'} m={'auto'} >
            <Text fontWeight={'bold'}>PAYMENT METHOD</Text>
						<Box bg={'#f7f7f7'} color={'green.500'} mt={'2rem'} p={'1rem'}>
						<Button>Debit/Credit Card</Button>
						<Box display={'flex'}  gap={'1'}>
							<Box>
								<Image src="https://images.dailyobjects.com/marche/icons/payments/amex-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-1" />
							</Box>
							<Box>
								<Image src="https://images.dailyobjects.com/marche/icons/payments/maestro-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-1" />
							</Box>
							<Box>
								<Image src="https://images.dailyobjects.com/marche/icons/payments/Mastercard-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-1" />
							</Box>
							<Box>
								<Image src="https://images.dailyobjects.com/marche/icons/payments/visa-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-1" />
							</Box>
							<Box>
								<Image src="https://images.dailyobjects.com/marche/icons/payments/rupay-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-1" />
							</Box>
						</Box>
						</Box>
						<Divider />
						<Box color={'green.500'} p={'1rem'} bg={'#f7f7f7'}>
							<Button>UPI</Button>
						</Box>
          </Box>
        </Box>
        <Box
          w={{ md: "50%" }}
          h={{ md: "25rem" }}
          overflow={{ md: "hidden" }}
          overflowY={{ md: "scroll" }}
        >
          <OrderSummary />
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
