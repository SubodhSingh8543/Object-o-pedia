import { Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react"
import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAdminDataProduct, handleAdminPostDataSuccess, postAdminDataProduct } from "../../../Redux/AdminRedux/admin.action";

export const AdminAddProductModal = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const toast = useToast();

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    const handleSubmitt = () => {

        const payload = {
            title,
            price: +price,
            category,
            description,
            image: img
        }

        dispatch(postAdminDataProduct(payload)).then((res) => {

            toast({
                title: `Product Added`,
                position: "top",
                isClosable: true,
                status: 'success',
                description: "Successfully added in your list",
                duration: 9000,
                isClosable: true,
            })
        });

        setTitle("");
        setCategory("");
        setImg("");
        setDescription("");
        onClose();
    }
    return (
        <>
            <Button
                fontWeight={"extrabold"} bg={"#b2f5ea"} border={"1px solid black"}
                ml='4'
                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
            >
                Add a New Product
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader >Add a new product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Text>Custom backdrop filters!</Text> */}
                        <Box>
                            <Text >Name of Product</Text>
                            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Product Name" />
                            <Text>Image Url</Text>
                            <Input value={img} onChange={(e) => setImg(e.target.value)} placeholder="Image Url" />
                            <Text>Product Description</Text>
                            <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description" />
                            <Text>Category</Text>
                            <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
                            <Text>Price</Text>
                            <Input value={price} onChange={(e) => setPrice(e.target.value)} type={"number"} placeholder="price" />
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Flex justifyContent={"space-between"} gap={"8px"}>
                            <Button bg={"red"} color="white" onClick={onClose}>Cancel</Button>
                            <Button bg={"#0072ba"} color="white" onClick={handleSubmitt}>Save</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}