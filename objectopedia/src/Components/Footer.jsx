import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    Image,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FaTwitter, FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa";
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
      marginTop={"200px"}
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader> <p style={{fontSize:"25px"}}>KNOW US</p></ListHeader>
              <Link href={"#"}>About DailyObjects</Link>
              <Link href={"#"}>Blog</Link>
            </Stack>
  
            <Stack align={"flex-start"}>
              <ListHeader> <p style={{fontSize:"25px"}}>HELPDESK</p></ListHeader>
              <Link href={"#"}>Terms Of Use</Link>
              <Link href={"#"}>Warranty Policy</Link>
              <Link href={"#"}>Shipping Policy</Link>
              <Link href={"#"}>Cancellation Policy</Link>
              <Link href={"#"}>Return and Exchange Policy</Link>
              <Link href={"#"}>Privacy and security Policy</Link>
            </Stack>
  
            <Stack align={"flex-start"}>
              <ListHeader> <p style={{fontSize:"25px"}}>NETWORK</p></ListHeader>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Corporate Gifting</Link>
            </Stack>
  
            <Stack align={"flex-start"}>
                        <ListHeader>
                            <p style={{fontSize:"25px"}}>FOLLOW US ON</p></ListHeader>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaPinterest />
                </SocialButton>
              </Stack>
  {/* <hr/> */}
              <Stack align={"flex-start"}>
                <ListHeader> <p style={{fontSize:"25px"}}>INSTALL APP</p></ListHeader>
                <Stack direction={"row"} spacing={6}>
                  <Image src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" />
                  <Image src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" />
                </Stack>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
            <hr style={{color:"grey"}} />
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}>
            <Text>© 2012 - 2023 Firki Wholesale Pvt.Ltd.</Text>
          </Container>
        </Box>
      </Box>
    );
  }
  ///footer here