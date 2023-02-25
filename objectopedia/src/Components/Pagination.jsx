import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {Button,Box, Stack} from "@chakra-ui/react"
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

  const btnArr =totalPages && new Array(totalPages)
    .fill(0)
    .map((e, i) => {
      return (
        <Button 
          key={i}
          mx={{base:"1",md:"3",lg:"3"}}
          ml={{md:"5"}}
          onClick={() => handlePage(i + 1)}
          color={currentPage === i + 1 && "#FFFFFF"}
          borderRadius={currentPage === i + 1 && "50%"}
          bg={currentPage === i + 1 && "#56B7C3"}
        >
          {i + 1}
        </Button>
      );
    })
  
  return (
    <div style={{marginTop:"50px"}}>
      <Box w={{base:"80%",md:"65%",lg:"40%"}} margin="auto" ml={{lg:"40%"}} >
        <Stack direction={{base:"column",md:"row",lg:"row"}}>
        <Box >
        {currentPage !== 1 && (
        <Button 
          bg="#56B7C3"
          color="#FFFFFF"
          onClick={() => handlePage(currentPage - 1)}
        >
          Previous
        </Button>
      )}
        </Box>
      <Box w={{base:"90%",md:"80%",lg:"60%"}} >
      {btnArr}
      </Box>
      <Box textAlign={{base:"right"}}>
      {currentPage !== totalPages && (
        <Button
          
          bg="#56B7C3"
          color="#FFFFFF"
          onClick={() => handlePage(currentPage + 1)}
        >
          Next
        </Button>
      )}
      </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Pagination;

