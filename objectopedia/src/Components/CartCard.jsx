import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CartCard = () => {
  return (
    <Box mb={'1rem'}>
      <Box w={"60%"} m={"auto"} display={"flex"} gap={"2rem"}>
        <Box bg={"#f7f7f7"}>
          <Image src="https://images.dailyobjects.com/marche/product-images/1103/frosted-hardshell-case-for-macbook-air-13-2022-images/Clear-Frosted-Hardshell-Case-for-Macbook-Air-13-2020-vw.png?tr=cm-pad_resize,v-2,w-134,h-164,dpr-1" />
        </Box>
        <Box
          fontSize={"smaller"}
          display={"flex"}
          flexDirection={"column"}
          gap={"2rem"}
        >
          <Box>
            <Text>Frosted Hardshell Case for Macbook Air 13 2022</Text>
            <Text fontWeight={'bold'} mt={"1.5"}>Rs.2199</Text>
          </Box>
          <Box
            fontSize={"xl"}
            w={"6rem"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box>
              <Button w={"2rem"} variant={"ghost"}>
                -
              </Button>
            </Box>
            <Box w={"2rem"} padding={"1"}>
              1
            </Box>
            <Box>
              <Button w={"2rem"} variant={"ghost"}>
                +
              </Button>
            </Box>
            <Box ml={"5.5rem"} cursor={'pointer'} mt={'.5rem'}>
              <FaRegTrashAlt />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartCard;
