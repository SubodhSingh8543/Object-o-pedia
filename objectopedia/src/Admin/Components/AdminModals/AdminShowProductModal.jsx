import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
    Box,
    Image,
    Text,
  } from '@chakra-ui/react'
  import { FaRegEye } from "react-icons/fa";


export const AdminShowProductModal = ({el}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    
  
    return (
      <>
        <FaRegEye color="blue" cursor={"pointer"} onClick={onOpen}/>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={"center"}>Product Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Box  >
                  <Image width={"300px"} src={el.image} alt='error'/>
                </Box>
                <Box >
                    <Text><b>Title:</b> {el.title}</Text>
                    <Text><b>Category:</b> {el.category}</Text>
                    <Text><b>Price:</b> {el.price}</Text>
                </Box>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }