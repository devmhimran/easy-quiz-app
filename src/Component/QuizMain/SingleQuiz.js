import React, { useState } from 'react';

const SingleQuiz = ({ quizSingle }) => {
    // console.log(quizSingle)
    const [wrong, setWrong] = useState('');
    const handleOption = (option) =>{
        console.log(option)
        setWrong(option)
    }
    return (
        <div className="quiz__question__main">
            <div className="container">
                {
                    quizSingle?.map((data, index) => <div key={index} className="card shadow p-3 my-4">
                        <div className="card-body">
                            <p className='quiz__question'>Quiz :{index + 1} {data.question}</p>
                            <p>{data.correctAnswer}</p>
                            <div className='row mt-5'>
                                {
                                    data?.options.map((data, index) =>
                                        <div key={index} className="col-md-6 col-lg-6">
                                            <div className="option__container d-flex gap-2" htmlFor={data} onClick={()=> handleOption(data)}>
                                                <input type="radio" name='answer' id={data} />
                                                <p className='option__label'>{data}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default SingleQuiz;