import React from 'react';

const SingleQuiz = ({ quizSingle }) => {
console.log(quizSingle)
    return (
        <div className="quiz__question__main">
            {
                quizSingle?.map((data, index) => <div key={index} className="card shadow my-4">
                    <div className="card-body">
                        <p className='quiz__question'>Quiz :{index+1} {data.question}</p>
                        {console.log(data.options)}
                    </div>
                </div>)
            }
        </div>

    );
};

export default SingleQuiz;