import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

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


function Featured(props) {
    const [loaded, setLoaded] = useState(false)
    const handleLoad = () => {
        setLoaded(true)
        alert("loaded")
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
          

            <br />
            <img src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="test" onLoad={handleLoad}
                className='img-fluid'
            />
        </div>
    );
}

export default Featured;