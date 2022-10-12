import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { toast, Toaster } from 'react-hot-toast';
import { AiOutlineEye } from 'react-icons/ai';

const SingleQuiz = ({ quizSingle }) => {
    // console.log(quizSingle)
    const [msg, setMsg] = useState('');
    const [count, setCount] = useState(0);
    const handleOption = (option) => {
        console.log(option)
        for (const correctAnswer of quizSingle) {
            if (option === correctAnswer.correctAnswer) {
                setCount(count + 1)
            }
        }
    }
    const handleAnswer = (answer) => {
        toast.success('Answer is ' + answer)
    }
    return (
        <div className="quiz__question__main">
            <div className="correct__answer__count">
                <div className="card border">
                    <div className="card-body">
                        <p className='correct__answer'>Correct Answer: {count}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                {
                    quizSingle?.map((data, index) => <div key={index} className="card quiz__question__card shadow p-3 my-4">
                        <div className="card-body">
                            <p className='quiz__question'>Quiz :{index + 1} {data.question}</p>
                            <span className='answer__icon' onClick={() => handleAnswer(data.correctAnswer)}><AiOutlineEye></AiOutlineEye></span>
                            <div className='row mt-5'>
                                {
                                    data?.options.map((option, index) =>
                                        <div key={index} className="col-md-6 col-lg-6">
                                            <div className="form-check">
                                                <input type="radio" id={option} value={option} className='input__radio' name='answer' />
                                                <label checked className={`option__container d-flex gap-2 `} htmlFor={option} onClick={() => handleOption(option)}>
                                                    <div className="radio__box"></div>
                                                    <p className='option__label'>{option}</p>
                                                </label>
                                            </div>



                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>

    );
};

export default SingleQuiz;