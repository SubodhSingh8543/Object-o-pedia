

// const AdminOrders = () => {

//     return(
//         <div>
//             AdminOrders
//         </div>
//     )
// }

// export default AdminOrders;




import { Box, Button, Flex, Heading, Image, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react";
import { useState } from "react";

// AiFillEye

import { FaRegEye } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ordersAdminData } from "../../Redux/AdminRedux/admin.action";
import { AdminAddProductModal } from "../Components/AdminModals/AdminAddProductModal";
import { AdminDeleteProductModal } from "../Components/AdminModals/AdminDeleteProductModal";
import { AdminEditProductModal } from "../Components/AdminModals/AdminEditProductModal";
import { AdminShowProductModal } from "../Components/AdminModals/AdminShowProductModal";
// import AdminAddProductModal from "../Components/AdminModals/AdminAddProductModal";


const AdminOrders = () => {
    const [current, setCurrentPage] = useState(1);
    const data = useSelector((res) => res.AdminReducer.orders);
    const dispatch = useDispatch();
    // const [price,setPrice] = useState(0);
    let totalPrice = 0;

    useEffect(() => {
        dispatch(ordersAdminData());
    }, [])

    for(let i=0; i<data.length; i++){
        // console.log(data[i].orders)
        for(let j=0; j<data[i].orders.length; j++){
            totalPrice += data[i].orders[j].price;
        }
    }

    // console.log(totalPrice);

    return (
        <>
            <Flex flexWrap={"wrap"} margin={"30px"} justifyContent={"space-between"} >
                <Heading>Orders</Heading>
                {/* <Button  fontWeight={"extrabold"} bg={"#b2f5ea"} border={"1px solid black"}> Add New Products</Button> */}
                {/* <AdminAddProductModal/> */}
            </Flex>
            <Box border={"5px solid black"} maxHeight={"500px"} overflow="scroll">
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead bg={"black"} >
                            <Tr>
                                <Th color="white">Product Id</Th>
                                <Th color="white">Product Image</Th>
                                <Th color="white">User Email</Th>
                                <Th color="white">Product name</Th>
                                <Th color="white">category</Th>
                                <Th color="white">price</Th>
                                <Th color="white">Status</Th>
                                {/* <Th color="white">Action</Th> */}
                            </Tr>
                        </Thead>
                        <Tbody>

                            {data?.map((el) => {
                                return el?.orders?.map((item) => (
                                    <Tr key={item.id}>
                                        <Td>{item.id}</Td>
                                        <Td><Image width={"80px"} height="80px" src={item.image} alt={"err"}/></Td>
                                        <Td>{el.email}</Td>
                                        <Td>{item.title}</Td>
                                        <Td>{item.category}</Td>
                                        <Td>₹{item.price}</Td>
                                        <Td>Pending</Td>
                                        {/* {setPrice(prev => prev + item.price)} */}
                                         {/* <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td> */}
                                    </Tr>
                                ));
                            
                            })
                            }
                        </Tbody>
                        {/* <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th>multiply by</Th>
                        </Tr>
                    </Tfoot> */}
                    </Table>
                </TableContainer>
            </Box>
            <Flex bg={"black"} color={"white"} justifyContent={"flex-end"}  >
                {/* <Box > */}
                {/* {Array(10).fill("").map((el,i) => ( */}

                {/* <Button isDisabled={current === 1} _hover={{ backgroundColor: "grey" }} bg={"black"} color={"white"} cursor={"pointer"} onClick={() => setCurrentPage(current - 1)}>{"<"}</Button>
                <Button _hover={{ backgroundColor: "grey" }} bg={"black"} color={"white"}>{". ."}{current}{". ."}</Button>
                <Button _hover={{ backgroundColor: "grey" }} bg={"black"} color={"white"} cursor={"pointer"} onClick={() => setCurrentPage(current + 1)} marginRight={"20px"}>{">"}</Button> */}
                {/* ))} */}
                {/* </Box> */}

                <Text padding={"10px"} marginRight={"20px"}>Total Price: ₹ {totalPrice}</Text>
            </Flex>
        </>
    )
}

export default AdminOrders


