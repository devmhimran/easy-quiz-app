import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero__main'>
            <div className="container">
                <h1 className='hero__heading'>Here your quiz app!</h1>
                <div className="hero__btn__container">
                    <Link className='hero__btn' to='/'>Start Quiz</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;