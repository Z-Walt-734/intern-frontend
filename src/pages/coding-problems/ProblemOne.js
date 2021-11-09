import React, { useState } from 'react';
import stringHash from 'string-hash'
import Table from 'react-bootstrap/Table';

export function ProblemOne() {
    const [inputs, setInputs] = useState({
        answer: ''
    });
    const { answer } = inputs;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
        console.log(stringHash(answer));

        if (answer && (stringHash(answer) == 4213449985 || stringHash(answer) == 405189099)) {
            setIsCorrect(true);
        }
    }
    return (
        <>
            <h1>Problem One</h1>
            <br />
            <p>A Fibonacci sequence is characterized by the fact that every number after the first two is the sum of the two preceding ones with thefirst two equal to 1 such that:</p>
            <p>Inputs:</p>
            <p>0, 1, 2, 3, 4, 5 </p>
            <p>Outputs:</p>
            <p>1, 1, 2, 3, 5, 8</p>
            <p>The input will start with a single number N equal to the number of subsequent inputs T to be tested</p>

            <b>Input</b>
            <p>T will be a u32</p>
            <b>Output</b>
            <p>For the i-th string, print a line containing "Case #i: " followed by that associated value of the sequence.</p>

            <Table bordered striped>
                <tbody>
                    <tr>
                        <td>Sample Input</td>
                        <td>Sample Output</td>

                    </tr>

                    <tr>
                        <td>
                            <p className='coding-input'>
                                5<br />
                                1<br />
                                2<br />
                                3<br />
                                8<br />
                                7<br />

                            </p>
                        </td>
                        <td>
                            <p className='coding-input'>
                                Case #1: 1<br />
                                Case #2: 2<br />
                                Case #3: 3<br />
                                Case #4: 34<br />
                                Case #5: 21<br />
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <form name='form' onSubmit={handleSubmit}>
                <a href="/inputs/problem1.html" target="_blank">Input data</a>
                <div className='form-group'>
                    <label>Answer</label>
                    <textarea
                        type='text'
                        name='answer'
                        id='answer'
                        value={answer}
                        onChange={handleChange}
                        className={'form-control' + (isSubmitted && !answer ? ' is-invalid' : '')}
                    />
                </div>
                <div className='form-group' >
                    <br />
                    <button variant='dark'>
                        Submit
                    </button>
                    {(!isCorrect) ? isSubmitted && <h3 className="text-danger">Incorrect</h3> : isSubmitted && <h3 className="text-danger">Correct!</h3>}
                </div>
            </form>

        </>
    )

}