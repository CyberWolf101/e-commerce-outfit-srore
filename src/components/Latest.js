import { ArrowRight, KeyboardArrowRight, LocalOffer, ShoppingCart } from '@mui/icons-material';
import React, { useState } from 'react';
import { TopSelling, products } from '../data';
import { Fade } from 'react-reveal';
import { useDisclosure } from '@chakra-ui/react'
import OverLayModal from './overLayModal';
import { Link } from 'react-router-dom';

function Latest({ addToCart }) {
    const [loaded, setLoaded] = useState(false)
    const [modalVal, setModalVal] = useState({})
    function handleLoad() {
        setLoaded(true)
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const addToModal = (item) => {
        setModalVal(item)
        // console.log(modalVal)

    }
    return (
        <div>
            <br />
            <br />
            <center>
                <div className="h3 text-center fw-bold">
                    Shop The Latest
                </div>
                <div className="line"></div>
            </center>
            <br />

            <div className='topSelling mt-4 mx-3'>
                {TopSelling.map((item, index) => (
                    <Fade left duration={1500} key={index}>
                        <div className='topSelingItems rounded shadow'>
                            <div style={{ position: 'relative' }} onClick={() => { onOpen(); addToModal(item) }} >
                                <div className='off' style={{ fontSize: '13px' }}>-{item.off}%</div>
                                <img src={item.img} alt="" className='img-fluid rounded' onLoad={handleLoad} />

                            </div>

                            <span> {item.name}</span>
                            <span> ₦{item?.price.toLocaleString()}</span>
                            <div className='actions mt-2 mb-2'>
                                <div className='action-btns btn' onClick={() => addToCart(item)}>
                                    <ShoppingCart />
                                </div>
                            </div>

                        </div>

                    </Fade>

                ))}


                <OverLayModal modalVal={modalVal} isOpen={isOpen} onClose={onClose} addToCart={addToCart} />

            </div>
            <center>
                <div style={{ width: '86%' }} >
                    <Link to="/coming-soon">
                        <div className=' w-100 btn shadow-sm'  style={{color:"grey"}}>see more <ArrowRight /></div>
                    </Link>
                </div>
            </center>
        </div>
    );
}

export default Latest;