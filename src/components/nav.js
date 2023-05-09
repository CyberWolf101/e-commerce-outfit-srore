import { Discount, Menu } from '@mui/icons-material';
import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
// import Logo from '../assets/logo.png'

function Nav(props) {
    return (
        <div className='mb-1'>
            <Fade top duration={1500}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <a className="navbar-brand paint" href="#" style={{ color: 'rgb(83, 6, 83)' }}>
                            <div className='paint'>Glamour Outfits</div>
                            {/* <div className='paint'>RUTHIE'S CLOSET</div> */}
                            {/* <div  className='paint'>SHOP<span style={{fontWeight:'bold', margin:'0px 2px', fontSize:'16px'}}>with</span>TOSIN</div> */}

                        </a>
                        <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                            <span className="text" style={{ color: 'rgb(83, 6, 83)' }}><Menu fontSize='medium' /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/featured">Featured</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className='nav-link text-black'>
                                        Cart
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fade>
            {/* <center>
                <div className="info">
                    <div className='info-txt'>Forget the rules. if you like it, wear it! </div>
                </div>
            </center> */}
        </div>
    );
}

export default Nav;