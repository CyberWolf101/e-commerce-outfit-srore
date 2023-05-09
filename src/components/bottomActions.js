import React, { useContext, useEffect } from 'react';
import { Favorite, ShoppingCart, Store, WhatsApp } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Fade } from 'react-reveal';
import { cartContext } from "../contexts/cartContext";
import { CartNumberContext } from '../contexts/cartNumberContext';
import { Link } from 'react-router-dom';




function BottomActions(props) {
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
        <div>
            <br />
            <br />
            <br />
            <br />
            <Fade duration={1500} bottom>
                <div className="fixed-bottom  shadow-lg">
                    <div className='bg-light p-3 d-flex actions-bottom'>
                        <div>
                            <Store fontSize='medium' />
                            <span>Shop</span>

                        </div>
                        <div>
                            <Badge badgeContent={'0'} color='secondary'>
                                <Favorite fontSize='medium' />
                            </Badge>
                            <span>Whitelist</span>

                        </div>
                        <Link to="/cart">
                            <div>
                                <Badge badgeContent={cartTotalItems ? cartTotalItems : "0"} color='secondary'>
                                    <ShoppingCart fontSize='medium' />
                                </Badge>
                                <span>Cart</span>
                            </div>
                        </Link>

                        <div >
                            <WhatsApp fontSize='medium' />
                            <span>Contact us</span>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default BottomActions;