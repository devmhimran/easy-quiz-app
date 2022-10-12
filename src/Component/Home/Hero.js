import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../Assets/quiz__hero.png'

const Hero = () => {
    return (
        <div className='hero__main'>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 hero__left">
                        <div className="hero__content__left">
                            <h1 className='hero__heading'>Make Learning Awesome, Here your quiz app! </h1>
                            <p className='hero__sub__title'>Easy Quiz App delivers engaging Learning to <br /> billions</p>
                            <div className="hero__btn__container">
                                <Link className='hero__btn' to='/'>Start Quiz</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="hero__image">
                            <img src={heroImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;