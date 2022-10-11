import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const navigate = useNavigate();
    const handleQuiz = (id) =>{
        navigate(`/quiz/${id}`)
    }
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setQuiz(data.data))
    }, [])
    return (
        <div className='quiz__main'>
            <div className="container">
                <div className="row">

                    {
                        quiz.map(data =>
                            <div key={data.id} className="col-md-4 col-lg-3 col-sm-12 gap-2">
                                <div className="card w-100">
                                    <div className="card-body">
                                        <div className="quiz__image">
                                            <img className='w-100 quiz__card' src={data.logo} alt="" />
                                        </div>
                                        <div className="quiz__detail">
                                            <div className="quiz__container">
                                                <p className='quiz__name'>{data.name}</p>
                                                <p className='quiz__quantity'>{data.total} Quiz</p>
                                            </div>
                                            <button className='btn btn-primary' onClick={()=> handleQuiz(data.id)}>Start Practice</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Quiz;


{/* <div className="card">
                            <div className="card-body">
                                <div className="quiz__image">
                                    <img src="" alt="" />
                                </div>
                                <div className="quiz__detail">
                                    <div className="quiz__container">
                                        <p className='quiz__name'>React</p>
                                        <p className='quiz__quantity'>30 quiz</p>
                                    </div>
                                    <button className='btn btn-primary'>Start Practice</button>
                                </div>
                            </div>
                        </div> */}