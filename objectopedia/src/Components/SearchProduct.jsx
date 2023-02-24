import React, { useEffect, useState } from 'react'
import { Box, Button,Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { getProducts } from '../Redux/product/product.action';

const SearchProduct = () => {
   const [text,setText] = useState("");
   const dispatch = useDispatch();

const handleSearch = ()=>{
    if(text.length){
        const params = {
            params:{q:text}
        };
        dispatch(getProducts(params))
    }
    setText("")
}
  return (
    <div>
          <Box w="60%" margin="auto">
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        placeholder='Search any product...'
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleSearch} >
          <BsSearch/>
        </Button>
      </InputRightElement>
    </InputGroup>
        </Box>
      
    </div>
  )
}

export default SearchProduct
