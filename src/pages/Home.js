import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from "../contexts/cartContext";
import { CartNumberContext } from '../contexts/cartNumberContext';
import { useAddToCart } from '../hooks/useAddToCart';
import Latest from '../components/Latest';
import Categories from '../components/categories';
import MixNmatch from '../components/MixNmatch';
import Contact from '../components/contact';
import Footer from '../components/Footer';
import Intro from '../components/intro';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from '../components/nav';

function Home() {
    const { addToCart } = useAddToCart()
    const [cart, setCart] = useContext(cartContext)
    const [cartTotalItems, setcartTotalItems] = useContext(CartNumberContext)
    
    useEffect(() => {
        if (localStorage.getItem('total-items')) {
            setCart(JSON.parse(localStorage.getItem('cart')))
            setcartTotalItems(localStorage.getItem('total-items'))
        } else {
            setcartTotalItems(0)
        }

    }, [])
    return (
        <div className=''>
            <Nav />
            <Intro />
            <ChakraProvider>
                <Categories />
                <Latest addToCart={addToCart} />
            </ChakraProvider>
            <MixNmatch />

            {/* <br /> */}
            {/* <Contact/> */}
            {/* <Footer/> */}
        </div>
    );
}

export default Home;