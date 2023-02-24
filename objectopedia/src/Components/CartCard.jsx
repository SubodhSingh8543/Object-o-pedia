import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { updateCart } from "../Redux/Cart/cart.actions";
import { useDispatch } from "react-redux";

const CartCard = ({
  title,
  price,
  description,
  image,
  deleteHandler,
  incHandler,
  decHandler,
  id,
  qty,
}) => {
  return (
    <Box mb={"1rem"}>
      <Box w={"60%"} m={"auto"} display={"flex"} gap={"2rem"}>
        <Box bg={"#f7f7f7"}>
          <Image w={"80%"} src={image} />
        </Box>
        <Box
          fontSize={"medium"}
          display={"flex"}
          flexDirection={"column"}
          gap={"2rem"}
        >
          <Box>
            <Text>{title}</Text>
            <Text fontWeight={"bold"} mt={"1.5"}>
              Rs.{price}
            </Text>
          </Box>
          <Box
            fontSize={"xl"}
            w={"6rem"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box>
              <Button
                w={"2rem"}
                onClick={() => decHandler(id)}
                variant={"ghost"}
              >
                -
              </Button>
            </Box>
            <Box w={"2rem"} padding={"1"}>
              {qty}
            </Box>
            <Box>
              <Button
                w={"2rem"}
                onClick={() => incHandler(id)}
                variant={"ghost"}
              >
                +
              </Button>
            </Box>
            <Box ml={"5.5rem"} cursor={"pointer"} mt={".5rem"}>
              <FaRegTrashAlt onClick={() => deleteHandler(id)} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartCard;
