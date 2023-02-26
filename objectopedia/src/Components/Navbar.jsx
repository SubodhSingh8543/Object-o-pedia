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
  useColorMode,
  HStack,
  Avatar,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  PopoverArrow,
} from "@chakra-ui/react";
import logo from "../Components/logo-color.png";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import styles from './Navbar.module.css';
import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import {FaMoon, FaSun} from "react-icons/fa"
import { Link as RouterLink, useNavigate } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchProduct from "./SearchProduct";
import { useUserAuth } from "../context/UserAuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Nav() {
  const cartData = useSelector((store) => store.cartReducer.cart);
  const { isOpen, onToggle } = useDisclosure();
  const singleUser=useSelector((store)=>store.AuthReducer);
  const userDetail=useSelector((store)=>store.AuthReducer.allUsers);
  const [clicked,setClicked] = useState(false);
  const navigate = useNavigate()
console.log("auth",auth)
  // const { toggleColorMode, colorMode } = useColorMode();
if(userDetail){
  console.log(userDetail)
}

if(singleUser){
  console.log(singleUser)
}


  const handleClick=()=>{
    setClicked(!clicked)
  }
  const handleLogout = ()=>{
    signOut(auth);
    navigate("/login")
  }
  // useEffect(()=>{
  //   if(auth){
  //     navigate("/login")
  //   }
  // },[])
  
  return (
    <Box style={{ position: "sticky", top: "0%", zIndex: "99" }} w="100%">
      <Box>
        <Flex
          // position={"fixed"}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          marginBottom={5}
          width={"100%"}
          borderStyle={"solid"}
          borderColor={useColorModeValue("#56B7C3", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "flex-start", md: "start" }}
          >
            <RouterLink to={"/"}>
              <Image
                ml={{ base: "-5", md: "2", lg: "4" }}
                width={{ base: "100px", md: "100px", lg: "100px" }}
                height="50px"
                src={logo}
                alt=""
              />
            </RouterLink>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justifyContent={"flex-start"}
            direction={"row"}
            spacing={6}
          >
            <RouterLink to={"/login"}>
              <Button fontSize={"sm"} fontWeight={600}>
                <BiUser />
              </Button>
            </RouterLink>
            <RouterLink to={"/cart"}>
            <Button style={{ position: 'relative' }}>
                    {cartData?.length>0 && <div className={styles.count}>
                        {cartData?.length}
                        </div>}
                  <BsBag />
           
                </Button>
                </RouterLink>
            <Button
              as={"a"}
              // display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              onClick={handleClick}
            >
              <FiSearch />
            </Button>
            
              <Box display={{ base: "none", md: "none", lg: "block" }} mt="5" cursor={"pointer"}>
              {singleUser ? (
                <Popover>
                  <PopoverTrigger>
                  <Avatar
                  size="sm"
                  name=""
                  src={auth?.currentUser?.photoURL}
                />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>{auth?.currentUser?.displayName}</PopoverHeader>
                    <PopoverBody onClick={handleLogout}>
                      Logout
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
             ) : null}
             </Box>
            
            {/* <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="xs"
       
        onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      /> */}
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      <SearchProduct searchStatus={clicked} />
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  //   const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const singleUser=useSelector((store)=>store.AuthReducer.singleUser);
  const userDetail=useSelector((store)=>store.AuthReducer.allUsers);
  const [user,setUser]=useState({});

  if(userDetail){
    console.log(userDetail)
  }
  
  

  return (
    <Stack direction={"row"} spacing={4} mt="3">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} marginLeft="80px" >
          <Stack style={{ margin: "auto", height: "100%" }}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <RouterLink
                  p={1}
                  justifyContent={"center"}
                 
                  m={"auto"}
                  fontSize={["10px", "12px", "14px", "16px"]}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: "teal",
                  }}>
                  {navItem.label}
                 
                </RouterLink>
              </PopoverTrigger>

              {navItem.children && (
                <RouterLink to="/product">
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
                </RouterLink>
                
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
      _hover={{ bg: useColorModeValue("green.50", "gray.900") }}>
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "green.400" }}
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
          <Icon color={"green.400"} w={5} h={5} as={ChevronRightIcon} />
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
        label: "All Items",
        subLabel: "Trending Design to inspire you",
        to: "/product",
      },
      {
        label: "Charging Solutions",
        subLabel: "Up-and-coming Designers",
        
      },
      {
        label: "Collections",
        subLabel: "Up-and-coming Designers",
       
      },
      {
        label: "Macbook Sleeves",
        subLabel: "Up-and-coming Designers",
       
      },
      {
        label: "Messesnger Bags",
        subLabel: "Up-and-coming Designers",
       
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
  },{
    label: "MY ACCOUNT",
    children: [
      {
        label: "Orders",
        // subLabel: "Trending Design to inspire you",
        href: "/myorders",
      },
      {
        label: "Wish List",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
     
    ],
  },
  
];
