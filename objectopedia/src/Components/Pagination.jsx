import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {Button,Box, Stack, Flex} from "@chakra-ui/react"
import { handlePageChange } from "../Redux/product/product.action";

const Pagination = () => {

  const {products,activePage,perPage} = useSelector((store)=>{
    return {
      products : store.productReducer.product,
      activePage : store.productReducer.activePage,
      perPage : store.productReducer.perPage
    }
  },shallowEqual)
  
  
  const dispatch = useDispatch();
 
  const totalPages = Math.ceil(products.length/perPage)
  const [searchParams,setSearchParams] = useSearchParams();
  let currentPage = searchParams.get('page');
  currentPage = Number(currentPage)

  const handlePage = (page) =>{
    dispatch(handlePageChange(page));
    const params = {
      page
    };
    setSearchParams(params);
  };

  useEffect(()=>{
    if(currentPage){
      dispatch(handlePageChange(currentPage))
    }
  },[currentPage]);

  
  return (
    <div style={{marginTop:"50px"}}>
     
     <Flex gap={3} justifyContent={"center"}>
        <Button  isDisabled={activePage===1} onClick={() => handlePage(activePage - 1)}>Prev</Button>
        {'...'}
        {Array(totalPages).fill('')
        .map((item, index) => {
            return <Button colorScheme={activePage === index + 1 ? 'cyan' : 'gray'} borderRadius={activePage === index + 1&&"50%"}
            onClick={() => handlePageChange(index + 1)}
             key={index}>{index + 1}</Button>
        })
        .filter((item, index) => {
           if(index < activePage + 2 && index > activePage - 2 ) return true
           return false
        })
        }
        { "..."}
        <Button  isDisabled={activePage===totalPages} onClick={() => handlePage(activePage + 1)}>Next</Button>
    </Flex>
    </div>
  );
};

export default Pagination;

