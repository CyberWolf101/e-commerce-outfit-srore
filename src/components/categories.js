import React, { useState } from 'react';
import { categories } from '../data';
import { Fade } from 'react-reveal';
import women from "../assets/women.PNG"
import men from "../assets/men.PNG"
import kids from "../assets/kids.PNG"
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function Categories(props) {
    const [loaded1, setLoaded1] = useState(false)

    return (
        <div className='mx-1'>


            <br />
            <center>
                <div className="h3 text-center fw-bold">
                    Top Categories
                </div>
                <div className="line"></div>
            </center>
            <br />
            {/* {!loaded1 && (<div>Loading...</div>)} */}

            <Fade right duration={1500}>
                <div className='mt-3 categories' >
                    <img src={women} alt="" className='img-fluid' onLoad={() => { setLoaded1(true); console.log("loaded") }} />
                    <div className='categories-container'>
                        <div className='categories-content'>
                            <div className='categories-text'>
                                <h3><b>Women's</b></h3>
                                <h4> collection</h4>
                            </div>
                            <div className='mt-2 collections-btn'>
                                <Link to="/coming-soon">
                                    view collection
                                    <ArrowForward />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </Fade>


            <Fade left duration={1500}>
                <div className='mt-3 categories'>
                    <img src={men} alt="" className='img-fluid' />
                    <div className='categories-container'>
                        <div className='categories-content'>
                            <div className='categories-text'>
                                <h3><b>Men's</b></h3>
                                <h4> collection</h4>
                            </div>
                            <div className='mt-2 collections-btn'>
                                <Link to="/coming-soon">
                                    view collection
                                    <ArrowForward />
                                </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade right duration={1500}>
                <div className='mt-3 categories'>
                    <img src={kids} alt="" className='img-fluid' />
                    <div className='categories-container'>
                        <div className='categories-content'>
                            <div className='categories-text'>
                                <h3><b>Kids</b></h3>
                                <h4> collection</h4>
                            </div>
                            <div className='mt-2 collections-btn'>
                                <Link to="/coming-soon">
                                    view collection
                                    <ArrowForward />
                                </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    );
}

export default Categories;