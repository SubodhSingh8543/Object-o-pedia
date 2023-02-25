import {
  Box,
  Divider,
  Heading,
  Image,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartCard from "../Components/CartCard";
import CartAccordion from "../Components/CartAccordion";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart, updateCart } from "../Redux/Cart/cart.actions";
import OrderSummary from "../Components/OrderSummary";
import { useUserAuth } from "../context/UserAuthContext";

const Cart = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  const singleUserData = useSelector((res) => res.AuthReducer.singleUser);
  const dispatch = useDispatch();
  const initSum = 0;
  const toast = useToast();
  let sum = cartData.reduce((acc, ele) => acc + ele.price * ele.qty, initSum);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const { user } = useUserAuth();
 
  
  const availCoupon = (coupon) => {
    if (coupon === "trinity") {
      setCouponDiscount(Math.floor(sum / 10));
      toast({
        title: "Applied Successfully",
        description: "You availed discount of 10%",
        variant: "subtle",
        status: "success",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Not Valid",
        description: "You have added wrong coupon",
        variant: "subtle",
        status: "error",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const deleteHandler = (id) => {
    let newCart = cartData.filter((ele) => {
      return ele.id !== id;
    });
    if (user?.uid) {
      dispatch(deleteCart(newCart, user?.uid));
    }
    toast({
      title: "Deleted Successfully",
      description: "Product deleted from cart",
      variant: "subtle",
      status: "success",
      position: "top-right",
      duration: 3000,
      isClosable: true,
    });
  };

  const incHandler = (id) => {
    let newCart = cartData.map((ele) => {
      return ele.id === id ? { ...ele, qty: ++ele.qty } : ele;
    });
    if (user?.uid) {
      dispatch(updateCart(newCart, user?.uid));
    }
  };

  const decHandler = (id) => {
    let newCart = cartData.map((ele) => {
      return ele.id === id ? { ...ele, qty: --ele.qty } : ele;
    });
    if (user?.uid) {
      dispatch(updateCart(newCart, user?.uid));
    }
  };

  useEffect(() => {
    if (user?.uid) {
      dispatch(getCart(user?.uid));
    }
  }, []);

  return (
    <Box textAlign={"center"}>
      <Image
        width={"100%"}
        src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,w-1233,dpr-1"
        alt="poster"
      />
      <Heading pt={"2rem"} pb={"2rem"}>
        SHOPPING BAG
      </Heading>
      <Divider />
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
          {cartData &&
            cartData.map((ele) => {
              return (
                <CartCard
                  key={ele.id}
                  deleteHandler={deleteHandler}
                  incHandler={incHandler}
                  decHandler={decHandler}
                  {...ele}
                />
              );
            })}
        </Box>
        <Box
          w={{ md: "50%" }}
          h={{ md: "25rem" }}
          overflow={{ md: "hidden" }}
          overflowY={{ md: "scroll" }}
        >
          <CartAccordion availCoupon={availCoupon} />
          <Divider />
          <OrderSummary
            totalItem={cartData.length}
            sum={sum}
            couponDiscount={couponDiscount}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
