import { Box, Button, Flex, Heading, Input, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react";

// AiFillEye

import { FaRegEye } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAdminDataProduct, handleAdminGetDataSuccess } from "../../Redux/AdminRedux/admin.action";
import { getAdminProductAPI } from "../../Redux/AdminRedux/admin.api";
import { AdminAddProductModal } from "../Components/AdminModals/AdminAddProductModal";
import { AdminDeleteProductModal } from "../Components/AdminModals/AdminDeleteProductModal";
import { AdminEditProductModal } from "../Components/AdminModals/AdminEditProductModal";
import { AdminShowProductModal } from "../Components/AdminModals/AdminShowProductModal";

const AdminProducts = () => {
    const data = useSelector((res) => res.AdminReducer.productData);
    const dispatch = useDispatch();
    const [searchParams,setSearchParams] = useSearchParams();
    const [current, setCurrentPage] = useState(Number(searchParams.get("_page")) || 1);
    const [total,setTotal] = useState(1)

    console.log(data.length);

    useEffect(() => {
        let params = {};

        params._limit = 12;
        params._page = current; 
        setSearchParams(params);

        let  data = {
            params : {
                _limit: 12 ,
                _page:  searchParams.get("_page") || 1
            }
        }
    
        dispatch(getAdminDataProduct(data)).then((res) => setTotal(Math.ceil(res)) ); 

    },[current,searchParams.get("_page")]);

    return (
        <>
            <Flex flexWrap={"wrap"} margin={"30px"} justifyContent={"space-between"} >
                <Heading>All Products</Heading>
                {/* <Button  fontWeight={"extrabold"} bg={"#b2f5ea"} border={"1px solid black"}> Add New Products</Button> */}
                <AdminAddProductModal />
            </Flex>
           
            <Box marginTop={"15px"} border={"5px solid black"} maxHeight={"500px"} overflow="scroll">
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead bg={"black"} >
                            <Tr>
                                <Th color="white">Product Id</Th>
                                {/* <Th color="white">Product Image</Th> */}
                                <Th color="white">Product name</Th>
                                <Th color="white">category</Th>
                                <Th color="white">price</Th>
                                <Th color="white">Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {data?.map((el) => (
                                <Tr key={el.id}>
                                    <Td>{el.id}</Td>
                                    {/* <Td>{"el"}</Td> */}
                                    <Td whiteSpace="unset" overflow="hidden" overflowWrap={"break-word"}> <Text  width={"150px"}>{el.title}</Text></Td>
                                    <Td>{el.category}</Td>
                                    <Td>₹ {el.price}</Td>
                                    <Td><Flex gap={"10px"} ><AdminShowProductModal el={el} /> <AdminEditProductModal el={el} /> <AdminDeleteProductModal id={el.id} /></Flex> </Td>
                                </Tr>
                            ))}


                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <Flex bg={"black"} color={"white"} justifyContent={"flex-end"}  >
                <Button isDisabled={current === 1} _hover={{ backgroundColor: "grey" }} bg={"black"} color={"white"} cursor={"pointer"} onClick={() => setCurrentPage(current - 1)}>{"<"}</Button>
                <Button _hover={{ backgroundColor: "grey" }} bg={"black"} color={"white"}>{". ."}{current}{". ."}</Button>
                <Button isDisabled={current === total} _hover={{ backgroundColor: "grey" }} bg={"black"} color={"white"} cursor={"pointer"} onClick={() => setCurrentPage(current + 1)} marginRight={"20px"}>{">"}</Button>
            </Flex>
        </>
    )
}

export default AdminProducts


