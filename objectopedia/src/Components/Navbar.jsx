import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Image,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import logo from "../Components/logo-color.png";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";
  
  import { BiUser } from "react-icons/bi";
  import { FiSearch } from "react-icons/fi";
  import { BsBag } from "react-icons/bs";
  
  export default function Nav() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "flex-start", md: "start" }}>
            <Image width="80px" height= "50px" src={logo} alt=""/>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justifyContent={"flex-start"}
            direction={"row"}
            spacing={6}>
            <Button as={"a"} fontSize={"sm"} fontWeight={600} href={"#"}>
              <BiUser />
            </Button>
            <Button as={"a"} fontSize={"sm"} fontWeight={600} href={"#"}>
              <BsBag />
            </Button>
            <Button
              as={"a"}
              // display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              href={"#"}>
              <FiSearch />
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    //   const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
  
    return (
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} marginLeft="80px">
            <Stack style={{ margin: "auto", height: "100%" }}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={1}
                    justifyContent={"center"}
                    href={navItem.href ?? "#"}
                    m={"auto"}
                    fontSize={["10px", "12px", "14px", "16px"]}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: "teal",
                    }}>
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
  
                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}>
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Stack>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}>
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-start"}
            align={"center"}
            flex={1}>
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}>
          <Text
            fontWeight={500}
            color={useColorModeValue("gray.600", "gray.200")}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            //   pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: "NEW ARRIVALS",
      children: [
        {
          label: "Desks",
          subLabel: "Trending Design to inspire you",
          href: "#",
        },
        {
          label: "Charging Solutions",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "Collections",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "Macbook Sleeves",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "Messesnger Bags",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
  
      ],
    },
    {
      label: "CASES & SLEEVES",
      children: [
        {
          label: "APPLE",
          subLabel: "Trending Design to inspire you",
          href: "#",
        },
        {
          label: "Samsung",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "OnePlus",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "Other Brands",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
      ],
    },
    {
      label: "ACCESSORIES SALE",
      children: [
        {
          label: "Watch Accesories",
          subLabel: "Trending Design to inspire you",
          href: "#",
        },
        {
          label: "Screen Guards",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "Stands",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "Charging Solutions",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
      ],
    },
    {
      label: "BAGS AND WALLETS",
      children: [
        {
          label: "Wallets",
          subLabel: "Trending Design to inspire you",
          href: "#",
        },
        {
          label: "Crossbody Bags",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "TOTE Bag",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "Messenger Bags",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
      ],
    },
    {
      label: "HOME OFFICE",
      children: [
        {
          label: "STANDS",
          subLabel: "Trending Design to inspire you",
          href: "#",
        },
        {
          label: "Organisers",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "DEsks",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
        {
          label: "Stationary",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
      ],
    },
    {
      label: "COLLECTIONS",
      children: [
        {
          label: "COLLECTION",
          subLabel: "Find your dream design job",
          href: "#",
        },
        {
          label: "STUDIO",
          subLabel: "An exclusive list for contract work",
          href: "#",
        },
      ],
    },
    {
      label: "GIFTING",
      children: [
        {
          label: "HOLIDAY GIFTING BUNDLES",
          subLabel: "Trending Design to inspire you",
          href: "#",
        },
        {
          label: "Gift by budget",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
      ],
    },
  ];
  