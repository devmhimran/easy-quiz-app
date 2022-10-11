import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuizMain = () => {
    const {id} = useParams();
    const [quizSingle, setQuizSingle] = useState([]);
    console.log(quizSingle)
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
        .then(res => res.json())
        .then(data => setQuizSingle(data.data))
    },[])
    return (
        <div className='container quiz__main__container'>
            <h1 className='text-center quiz__main__title'>Quiz of {quizSingle.name}</h1>
            <div className="card shadow">

            </div>
        </div>
    );
};

export default QuizMain;