import ProductCard from "../Components/ProductCard";

import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { getProducts } from "../Redux/product/product.action";
import { Box, Flex, Grid, GridItem, Show, Skeleton } from "@chakra-ui/react";
import {Link} from "react-router-dom"


const ProductPage = () => {

    const products = useSelector((store)=>store.productReducer.product)
    const loading = useSelector((store)=>store.productReducer.loading)
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        if(products.length===0){
        dispatch(getProducts())
        }
    },[])

    return (
      <div>
        <Flex>
        <Show >
          <Box border="1px solid red" w="15%">
            
              <Box>This text appears only on screens 400px and smaller.</Box>
            
          </Box>
          </Show>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            ml={3}
            rowGap={-10} columnGap={8}
          >
            {products.map((prod) => (
              <GridItem key={prod.id} m="-10px">
                <Skeleton isLoaded={!loading}>
                  <ProductCard
                    key={prod.id}
                    image={prod.image}
                    desc={prod.description}
                    name={prod.title}
                    category={prod.category}
                    price={prod.price}
                  />
                </Skeleton>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </div>
    );
}

export default ProductPage;