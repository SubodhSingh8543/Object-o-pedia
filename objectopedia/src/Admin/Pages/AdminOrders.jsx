

// const AdminOrders = () => {

//     return(
//         <div>
//             AdminOrders
//         </div>
//     )
// }

// export default AdminOrders;




import { Box, Button, Flex, Heading, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react";

// AiFillEye

import { FaRegEye } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AdminAddProductModal } from "../Components/AdminModals/AdminAddProductModal";
import { AdminDeleteProductModal } from "../Components/AdminModals/AdminDeleteProductModal";
import { AdminEditProductModal } from "../Components/AdminModals/AdminEditProductModal";
import { AdminShowProductModal } from "../Components/AdminModals/AdminShowProductModal";
// import AdminAddProductModal from "../Components/AdminModals/AdminAddProductModal";


const AdminOrders = () => {

    const [current, setCurrentPage] = useState(1);

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
                                <Th color="white">Product name</Th>
                                <Th color="white">category</Th>
                                <Th color="white">price</Th>
                                <Th color="white">Status</Th>
                                <Th color="white">Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td>Pending</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td>Pending</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td>Pending</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td>Pending</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td>Pending</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>image</Td>
                                <Td>millimetres (mm)</Td>
                                <Td>25.4</Td>
                                <Td>₹347</Td>
                                <Td>Pending</Td>
                                <Td> <Flex gap={"10px"} > <AdminShowProductModal /> <AdminEditProductModal /> <AdminDeleteProductModal/> </Flex> </Td>
                            </Tr>
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
            <Flex  bg={"black"} color={"white"} justifyContent={"flex-end"}  >
                {/* <Box > */}
                    {/* {Array(10).fill("").map((el,i) => ( */}
                        
                        <Button isDisabled={current === 1}  _hover={{backgroundColor:"grey"}} bg={"black"} color={"white"}  cursor={"pointer"} onClick={() => setCurrentPage(current - 1)}>{"<"}</Button>
                        <Button   _hover={{backgroundColor:"grey"}}  bg={"black"} color={"white"}>{". ."}{current}{". ."}</Button>
                        <Button   _hover={{backgroundColor:"grey"}}  bg={"black"} color={"white"} cursor={"pointer"} onClick={() => setCurrentPage(current + 1)} marginRight={"20px"}>{">"}</Button>
                    {/* ))} */}
                {/* </Box> */}
            </Flex>
        </>
    )
}

export default AdminOrders


