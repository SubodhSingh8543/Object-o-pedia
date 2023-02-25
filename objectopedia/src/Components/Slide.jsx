import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Slide = () => {
  return (
    <div>
      <Heading
        display={"flex"}
        justifyContent={"flex-start"}
        margin={10}
        fontFamily={"sans-serif"}>
        STUDIO COLLECTIONS
      </Heading>
      <Box>
        <Box
          display={{ base: "grid", md: "grid", lg: "flex" }}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          w={{ base: "100%", md: "100%", lg: "33%" }}
          h={{ base: "auto", md: "auto", lg: "auto" }}
          gap={2}>
          <Image
            border={"1px solid blue"}
            src="https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,dpr-1"
            alt=""
          />

          <Image
            border={"1px solid blue"}
            src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,dpr-1"
            alt=""
          />

          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,dpr-1"
            alt=""
          />
          <br />
        </Box>
      </Box>
    </div>
  );
};

export default Slide;
