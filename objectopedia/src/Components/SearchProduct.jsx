import React, { useEffect, useState } from 'react'
import { Box, Button,Input, InputGroup, InputRightElement, Text, useBoolean} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/product/product.action';
import { Link } from 'react-router-dom';
import {  useRef} from "react";

const SearchProduct = ({searchStatus}) => {
   const [text,setText] = useState("");
   const throttleId = useRef(false);
   const [throttledText, setThrottledText] = useState(text);
   const dispatch = useDispatch();
   const [suggestions, setSuggestions] = useState([])
   const [showDropdown, setShowDropdown] = useBoolean()
   const products = useSelector((store ) => store.productReducer.product);

   console.log(searchStatus);
 
   useEffect(() => {
    if (!throttleId.current) {
      throttleId.current = true;
      setTimeout(() => {
        throttleId.current = false;
        setThrottledText(text);
      }, 400);
    }
  }, [400, text]);

// const handleSearch = ()=>{
//     if(text.length){
//         const params = {
//             params:{q:text}
//         };
//         dispatch(getProducts(params))
//     }
//     setText("")
//   }
  
  useEffect(() => {
    if(throttledText === ''){
        setSuggestions([])
    }
    else{
        let newSuggestions = products.filter(item => {
            return item.title.split(' ').join("").trim().toLowerCase().indexOf(throttledText) !== -1 ? true : false;
        })
        setSuggestions(newSuggestions)
        setShowDropdown.on()
    }
},[throttledText])

    const handleClick = () =>{
      setShowDropdown(!showDropdown)
    }


  return (
    
      <Box  display={[searchStatus?"block":"none"]}>
      <Box w="60%" margin="auto" position="relative">
    <InputGroup  size='md'>
  <Input  
    pr='4.5rem'
    pl="4"
    variant="flushed"
    placeholder='Search any product...'
    value={text}
    onChange={(e)=>setText(e.target.value)}
  />
  <InputRightElement width='4.5rem'>
    <Button h='1.75rem' size='sm'  >
      <BsSearch/>
    </Button>
  </InputRightElement>
</InputGroup>
{suggestions.length > 0 && <Box
    border='1px solid #56B7C3'
    borderRadius='5px'
    position='absolute'
    top='50px'
    zIndex="10"
    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif"
    fontSize="15px"
    bgColor='white'
    overflow='scroll'
    w='100%'
    maxH='400px'
  >
    {suggestions.map(item => {
        return <Link onClick={handleClick} to={`/product/${item.id}`}><Text fontSize='xl' cursor='pointer'>{item.title}</Text>
        </Link>
    })}
  </Box>}
    </Box>
  
</Box>
    
    
  )
}

export default SearchProduct
