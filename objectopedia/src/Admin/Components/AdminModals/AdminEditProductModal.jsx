import { Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { updateAdminDataProduct } from "../../../Redux/AdminRedux/admin.action";




export const AdminEditProductModal = ({el}) => {
    const [title, setTitle] = useState(el.title || "");
    const [img, setImg] = useState(el.image || "");
    const [description, setDescription] = useState(el.description || "");
    const [category, setCategory] = useState(el.category || "");
    const [price, setPrice] = useState(el.price || 0);
    const dispatch = useDispatch();


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

    const handleUpdate = () => {

        const payload = {
            title,
            price: +price,
            category,
            description,
            image: img
        }

        dispatch(updateAdminDataProduct(el.id,payload));

        onClose();
    }


    return (
        <>
            {/* <Button
         fontWeight={"extrabold"} bg={"#b2f5ea"} border={"1px solid black"}
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Use Overlay one
        </Button> */}
            <GrEdit
                cursor={"pointer"}
                fontWeight={"extrabold"} bg={"#b2f5ea"} border={"1px solid black"}
                ml='4'
                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
            >
                Edit Product
            </GrEdit>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Edit product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Text>Custom backdrop filters!</Text> */}
                        <Box>
                            <Text>Name of Product</Text>
                            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product Name" />
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
                            <Button bg={"red"} color="white" onClick={onClose}>Cance</Button>
                            <Button bg={"#0072ba"} color="white" onClick={handleUpdate}>Update</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}