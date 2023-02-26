import { Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import OrderSummary from "../Components/OrderSummary";
import { useSelector } from "react-redux";
import DebitModal from "../Components/DebitModal";
import { addtoOrdersApi, getOrdersApi } from "../Redux/checkout/checkout.api";
import { useUserAuth } from "../context/UserAuthContext";
import { deleteCartApi } from "../Redux/Cart/cart.api";

const Payment = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  const initSum = 0;

  const { user } = useUserAuth();
  let sum = cartData?.reduce((acc, ele) => acc + ele.price * ele.qty, initSum);

  const [couponDiscount, setCouponDiscount] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      getOrdersApi(user?.uid).then((res) => {
        if (res) {
          setOrders(res);
        }
      });
    }
  }, []);

  const addtoOrders = (newOrders) => {
    addtoOrdersApi([...orders, ...newOrders], user?.uid);
    if (user?.uid) {
      console.log(user.uid, "user UID");
      deleteCartApi([], user?.uid);
    }
  };

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
          <Box w={"60%"} m={"auto"}>
            <Text fontWeight={"bold"}>PAYMENT METHOD</Text>
            <Box bg={"#f7f7f7"} color={"green.500"} mt={"2rem"} p={"1rem"}>
              <DebitModal addtoOrders={addtoOrders} />
              <Box display={"flex"} gap={"1"}>
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
          </Box>
        </Box>
        <Box
          w={{ md: "50%" }}
          h={{ md: "25rem" }}
          overflow={{ md: "hidden" }}
          overflowY={{ md: "scroll" }}
        >
          <OrderSummary
            totalItem={cartData?.length}
            sum={sum}
            couponDiscount={couponDiscount}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
