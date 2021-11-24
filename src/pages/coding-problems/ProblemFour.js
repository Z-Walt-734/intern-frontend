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

        if (answer && (stringHash(answer) == 1477832602 || stringHash(answer) == 3778321200)) {
            setIsCorrect(true);
        }
    }
    return (
        <>
            <h1>Problem Four</h1>
            <br />
            <h3>Problem</h3>

            <p>
                Reversort is an algorithm to sort a list of distinct integers in increasing order.
                The algorithm is based on the "Reverse" operation. Each application of this
                operation reverses the order of some contiguous part of the list.
            </p>
            <p>
                The pseudocode of the algorithm is the following:
            </p>
            <pre>Reversort(L):<br />
                &nbsp;&nbsp;for i := 1 to length(L) - 1<br />
                &nbsp;&nbsp;&nbsp;&nbsp;j := position with the minimum value in L between i and length(L), inclusive<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Reverse(L[i..j])
            </pre>
            <p>
                After i−1 iterations, the positions 1,2,…,i−1 of the list contain the i−1 smallest elements of L, in increasing order. During the i-th iteration, the process reverses the sublist going from the i-th position to the current position of the i-th minimum element. That makes the i-th minimum element end up in the i-th position.
            </p>
            <p>
                For example, for a list with 4 elements, the algorithm would perform 3 iterations. Here is how it would process L=[4,2,1,3]:
            </p>
            <div>
                <pre>
                    1)&emsp;i=1, j=3⟶L=[1,2,4,3] <br />
                    2)&emsp;i=2, j=2⟶L=[1,2,4,3] <br />
                    3)&emsp;i=3, j=4⟶L=[1,2,3,4] <br />
                </pre>
            </div>
            <p>
                The most expensive part of executing the algorithm on our architecture is the Reverse operation. Therefore, our measure for the cost of each iteration is simply the length of the sublist passed to Reverse, that is, the value j−i+1. The cost of the whole algorithm is the sum of the costs of each iteration.
            </p>
            <p>
                In the example above, the iterations cost 3, 1, and 2, in that order, for a total of 6.
            </p>
            <p>
                Given the initial list, compute the cost of executing Reversort on it.
            </p>


            <h3>Input</h3>
            <p>
                The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of 2 lines. The first line contains a single integer N, representing the number of elements in the input list. The second line contains N distinct integers L1, L2, ..., LN, representing the elements of the input list L, in order.
            </p>
            <h3>Output</h3>
            <p>
                For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the total cost of executing Reversort on the list given as input.
            </p>
            <div>

                <p>
                    Sample Case #1 is described in the statement above.
                </p>
                <p>
                    In Sample Case #2, there is a single iteration, in which Reverse is applied to a sublist of
                    size 1. Therefore, the total cost is 1.
                </p>
                <p>
                    In Sample Case #3, the first iteration reverses the full list, for a cost of 7. After that,
                    the list is already sorted, but there are 5 more iterations, each of which contributes a cost
                    of 1.
                </p>
            </div>



            <Table bordered striped>
                <tbody>
                    <tr>
                        <td>Sample Input</td>
                        <td>Sample Output</td>

                    </tr>

                    <tr>
                        <td>
                            <p className='coding-input'>
                                3 <br />
                                4 <br />
                                4 2 1 3<br />
                                2<br />
                                1 2<br />
                                7<br />
                                7 6 5 4 3 2 1<br />

                            </p>
                        </td>
                        <td>
                            <p className='coding-input'>
                                Case #1: 6 <br />
                                Case #2: 1 <br />
                                Case #3: 12 <br />
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <form name='form' onSubmit={handleSubmit}>
                <a href="/inputs/problem4.html" target="_blank">Input data</a>
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