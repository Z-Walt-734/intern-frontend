import React, { useState } from 'react';
import stringHash from 'string-hash'
import Table from 'react-bootstrap/Table';

export function ProblemFour() {
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
            <h1>Problem Three</h1>
            <br />
            <p>This problem will only have a Case #1 and Case #2 output</p>
            <p>With Halloween come and gone the only thing left of the spooky holiday is the candy collected. And of course being an avid software engineer and numbers nerd, you jumped at the oppurtunity to make this as complex of a math problem as possible</p>
            <p>You have divided all your candy by type into 200 seperate buckets and made a list of how many pieces are in each one (your input list). As this year is such a good haul (compared to last year) you have decided to "stick it to <code>2020</code>" one last time by testing combinations of candy amounts and math operations.</p>
            <p>Your goal is to test if a combination of any two buckets and a combination of any three buckets can sum together to get <code>2020</code>. If this is possible, you will return the product of those two numbers (as Case # 1) and the product of those three numbers (as Case #2). Else, return -1 </p>

            <b>Example</b>
            <p>In this list, the two entries that sum to <code>2020</code> are <code>1721</code> and <code>299</code>. Multiplying them together produces <code>1721 * 299 = 514579</code>, so the correct answer is <code><em>514579</em></code>. The three entries that sum to <code>2020</code> are <code>979</code>, <code>366</code>, and <code>675</code>. Multiplying them together produces the answer, <code><em>241861950</em></code>.</p>

            <b>Input</b>
            <p>The input list will start with N equal to the total number buckets of candy followed by N values of u32 describing the number of pieces of candy in each bucket.</p>
            <b>Output</b>
            <p>For the i-th string, print a line containing "Case #i: " followed by the product of the associated buckets of candy.</p>

            <Table bordered striped>
                <tbody>
                    <tr>
                        <td>Sample Input</td>
                        <td>Sample Output</td>

                    </tr>

                    <tr>
                        <td>
                            <p className='coding-input'>
                                6 <br />
                                1721<br />
                                979<br />
                                366<br />
                                299<br />
                                675<br />
                                1456<br />

                            </p>
                        </td>
                        <td>
                            <p className='coding-input'>
                                Case #1: 514579<br />
                                Case #2: 241861950<br />
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>

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