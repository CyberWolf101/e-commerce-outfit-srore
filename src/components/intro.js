import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import bg from '../assets/stock_edited.jpg'
import { Loop } from '@mui/icons-material';
import { Fade } from 'react-reveal';

function Intro(props) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.onload = () => setLoaded(true)
        img.src = bg
    }, [])
    return (
        <div className='mb-2'>
            {/* sliders-noBg */}
            {loaded && (
                <Fade duration={1500}>
                    <div className='sliders'>
                        <div className='overlay-slide rounded '>
                            <div className='ms-2 me-2 mt-3' style={{ width: '100%' }}>
                                <span className='h4'>Transform</span>
                                <div className='h4 mt-1'>The <b>Classics</b></div>
                                <div className='text-dark' style={{ fontSize: '15px' }}>Lorem ipsum, dolor sit amet consur.</div>
                            </div>
                            <div className='bg-dark mx-1 text-light text-center fw-bold p-2 mt-4'>
                                shop now
                            </div>
                        </div>
                    </div>
                </Fade>
            )}
            {!loaded && (
                <div className='sliders-noBg'>
                    <div className='overlay-slide-loading rounded '>
                        <div className='loading_intro'>
                            <div className='loop' >
                                <Loop fontSize='large' />
                            </div>
                        </div>
                        <div className='ms-2 me-2 mt-3' style={{ width: '100%' }}>
                            <span className='h4'>Transform</span>
                            <div className='h4 mt-1'>The <b>Classics</b></div>
                            <div className='text-dark' style={{ fontSize: '15px' }}>Lorem ipsum, dolor sit amet consur.</div>
                        </div>
                        <div className='bg-dark mx-1 text-light text-center fw-bold p-2 mt-4'>
                            shop now
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Intro;