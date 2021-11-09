import React, { useState } from 'react';
import stringHash from 'string-hash'
import Table from 'react-bootstrap/Table';

export function ProblemFive() {
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

        if (answer && (stringHash(answer) == 4093707583 || stringHash(answer) == 532789141)) {
            setIsCorrect(true);
        }
    }
    return (
        <>

            <form name='form' onSubmit={handleSubmit}>
                <a href="/inputs/problem3.html" target="_blank">Input data</a>
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