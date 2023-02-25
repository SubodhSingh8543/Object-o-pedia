import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  export default function OurStory() {
    return (
      <Container maxW={"5xl"} py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>OUR STORY</Heading>
            <Text color={"gray.900"} fontSize={"lg"}>
              Founded in 2012, DailyObjects is a design-obsessed lifestyle
              accessories brand committed to making your everyday carry
              #lessordinary. You can look forward to a carefully-crafted range of
              products, made from long-lasting materials, with designs that stand
              out and make your life easy. With DailyObjects, let your lifestyle
              reflect your sensibilities as you go on to make your every day
              #lessordinary.
            </Text>
            <Text>Read More...</Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }></Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,dpr-1"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
  