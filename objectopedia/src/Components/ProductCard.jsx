
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
  
export default function ProductCard({image,name,price,category}) {
 
  const loading = useSelector((store)=>store.productReducer.loading)
 
  
  return (
      <Center py={12}>
        
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
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            p={"5"}
            >
            <Image
              rounded={'lg'}
              height={230}
              width={250}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10}>
          <Text color={'gray.500'} fontSize={'10px'} textTransform={'uppercase'}>
              {category}
            </Text>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="sm"
              color="#000000DE"
              as="h4"
              fontFamily="Graphik Regular,sans serif"
              lineHeight="tight"
              isTruncated>
              {name}
            </Box>
            
          </Flex>
          
            <Stack spacing="0.5">
            <Stack direction={'row'} align={'center'}>           
              <Text fontWeight={600} color="#444444" fontSize={'18px'} >
                Rs.{price}
              </Text>
              <Text textDecoration={'line-through'} color="#444444" fontSize={'15'} >
                 999
              </Text>
            </Stack>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Text fontFamily="Trade Gothik LT Pro,sans serif" textAlign="left" color="#C21122" fontSize={'13'} >
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