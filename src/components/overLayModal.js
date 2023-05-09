import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'

const OverLayModal = ({modalVal, addToCart, isOpen, onClose }) => {

  
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <center>
                        <ModalHeader>{modalVal?.name}</ModalHeader>
                        <div className='border border-1'>
                            <ModalCloseButton />
                        </div>
                        <ModalBody>
                            <img src={modalVal?.img} alt="" className='modal-img' />
                        </ModalBody>
                        <div className='mb-2 bg-light p-2 fw-bold h5'>
                            ₦{modalVal?.price?.toLocaleString()}
                        </div>
                        <ModalFooter w='100' bg="lavender">
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme="blue" onClick={() => addToCart(modalVal)}>Add To Cart</Button>
                        </ModalFooter>
                    </center>

                </ModalContent>
            </Modal>
        </div>
    );
};

export default OverLayModal;