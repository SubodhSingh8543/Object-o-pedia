
import {
    Box,
    Center,
    Text,
    Stack,
    Image,
    Flex,
    Icon,
    Tooltip,
    chakra,
   
  } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
  
export default function ProductCard({id,image,name,price,category}) {
 
  const loading = useSelector((store)=>store.productReducer.loading)
 
  // console.log(id)
  
  return (
    <Center py={6}>
        
    <Box
      role={'group'}
      p={6}
      maxW={'290px'}
      w={'full'}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
      >
      <Link to={`/product/${id}`}>
      <Box
        rounded={'lg'}
        
        pos={'relative'}
        height={'230px'}
        p={"3"} pt={"0"}
        bg={"RGBA(0, 0, 0, 0.08)"}
        >
        <Image
          rounded={'lg'}
          height={230}
          width={250}
          objectFit={'cover'}
          src={image}
        />
      </Box>
      </Link>  
      <Stack pt={6}>
      <Text color={'gray.500'} fontSize={'10px'} textAlign="center" textTransform={'uppercase'}>
          {category}
        </Text>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Box
          fontSize="16px"
          color="#000000DE"
          as="h4"
          fontFamily="Graphik Regular,sans serif"
          lineHeight="tight"
          isTruncated>
          {name}
        </Box>
        
      </Flex>
      
        <Stack spacing="0.5" >
        <Stack direction={'row'} align={'center'}>           
          <Text fontWeight={600} color="#444444" fontSize={'16px'} >
            Rs.{price}
          </Text>
          <Text textDecoration={'line-through'} color="#444444" fontSize={'16px'} >
             999
          </Text>
        </Stack>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Text fontFamily="Trade Gothik LT Pro,sans serif" textAlign="left" color="#E66B55" fontSize={'13px'} >
          BUY ANY 3 @ 999 ONLY
          </Text>
          <Tooltip
          label="Wishlist"
          bg="white"
          placement={'top'}
          color={'gray.800'}
          fontSize={'1em'}>
          <chakra.a href={'#'} display={'flex'}>
            <Icon as={FiHeart}  h={"20px"} w={"20px"} mt="-1" alignSelf={'center'} />
          </chakra.a>
        </Tooltip>

        </Flex>
        </Stack>
      </Stack>
    </Box>
  </Center>
    );
  }