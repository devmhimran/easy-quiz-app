import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [quiz, setQuiz] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setQuiz(data.data))
    }, [])
    return (
        <div className='container statistics__main'>
            <h1 className='text-center mb-4'>Statistics</h1>
            <div className="row g-4">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="statistics__chart">
                        <div className="card border w-100">
                            <div className="card-body">
                                <ResponsiveContainer width="100%" height="100%" aspect={1}>
                                    <AreaChart
                                        width={300}
                                        height={300}
                                        data={quiz}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card border">
                        <div className="card-body">
                            <ResponsiveContainer width="100%" height="100%" aspect={1}>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={quiz}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="total" fill="#8884d8" />
                                    <Bar dataKey="name" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;