import { useEffect, useState } from "react";
import { getOrdersApi } from "../Redux/checkout/checkout.api";
import { useUserAuth } from "../context/UserAuthContext";
import ProductCard from "../Components/ProductCard";
import { Box, SimpleGrid } from "@chakra-ui/react";

const MyOrders = () => {
  const { user } = useUserAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      getOrdersApi(user?.uid).then((res) => {
        if (res) {
          setOrders(res);
        }
      });
    }
  }, []);
  console.log(orders);
  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 4]}>
        {orders?.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              image={prod.image}
              desc={prod.description}
              name={prod.title}
              category={prod.category}
              price={prod.price}
              id={prod.id}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default MyOrders;
