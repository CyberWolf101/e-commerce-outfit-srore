import React from 'react';
import { TopSelling, othr } from '../data';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

function MixNmatch(props) {
    return (
        <div>
            <br />
            <br />
            <center>
                <div className="h3 text-center fw-bold">
                    Mix & Match
                </div>
                <div className="line"></div>
            </center>
            <div className='mix-container mx-3'>
                {othr.map((mix, index) => (
                    <Fade key={index} duration={1500}>
                        <div>
                            <Link to="/coming-soon">
                                <div className='mix-content-container shadow pb-4'>
                                    <img src={mix.img} alt="" className='img-fluid' />
                                    <div className="mix-txt-con ">
                                        <div className='mix-txt shadow mb-1'>{mix.name}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
}

export default MixNmatch;