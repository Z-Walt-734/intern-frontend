import React, { useState } from 'react';
import stringHash from 'string-hash'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function ProblemTwo() {
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

        if (answer && (stringHash(answer) == 3937400423 || stringHash(answer) == 1015096205)) {
            setIsCorrect(true);
        }
    }

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => { setShow1(false); setShow2(false) };
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);

    return (
        <>
            <br />
            <h1>Problem Two</h1>
            <p>

                This problem is related to String solving from last week. Except instead of switching between vowels and consonants there's rules to which letters can be changed.
                <br />
                <br />
                Connie received a string S for her birthday, consisting entirely of uppercase letters (each between "A" and "Z", inclusive). However, Connie really only likes nice, consistent strings. She considers a string to be consistent if and only if all of its letters are the same.
                <br />
                <br />
                Each second, Connie may choose one letter in S and replace it with a different letter. There are K different types of replacements she may make, with the i-th one involving choosing letter A[i] anywhere in S and replacing it with letter B[i]​. No type of replacement (ordered pair of A[i]​ and B[i]) is given twice. There is no limit on how many times she may end up using each type of replacement. If a letter appears multiple times in S, she may only replace a single occurrence per second.
                <br />
                <br />
                Help her determine the minimum number of seconds required to change S into any consistent string, if possible. If it's impossible to ever do so, output −1 instead. Note that S might already be consistent, in which case 0 seconds would be required.

            </p>
            <b>Constraints</b>
            <br />
            <p>1 &lt;= T &lt;= 40</p>
            <p>1 &lt;= S.len() &lt;= 100</p>
            <p>0 &lt;= K &lt;= 300</p>
            <p>&quot;A&quot; &lt;= S[i], A[i], B[i] &lt;= &quot;Z&quot;</p>
            <p>A[i] != B[i]</p>
            <b>Input</b>
            <p>Input begins with an integer T, the number of birthdays Connie has had. For each birthday, there is one line containing the string S, then another line containing the integer K, then K more lines, the i-th of which contains the two characters A[i]​ and B[i].</p>
            <b>Output</b>
            <p>For the i-th string, print a line containing "Case #i: " followed by the minimum number of seconds required to change S into any consistent string, or -1 if it's impossible to do so.</p>

            <p>In the first case, Connie could replace the second and third letters (&quot;B&quot; and &quot;C&quot;) each with &quot;A&quot;, yielding the string &quot;AAA&quot; in 2 seconds.</p>

            <p>In the second case, Connie cannot apply either available type of replacement to &quot;ABC&quot;, meaning that she cannot change it into a consistent string.</p>

            <p>In the third case, &quot;F&quot; is already consistent.</p>

            <p>In the fourth case, Connie could replace the first, third, and fifth letters (&quot;B&quot;, &quot;N&quot;, and &quot;N&quot;) each with &quot;A&quot;, yielding the string &quot;AAAAAA&quot; in 3 seconds.</p>

            <p>In the sixth case, Connie could change &quot;FOXEN&quot; into the string &quot;WWWWW&quot; in 8 seconds. Note that she may apply a sequence of multiple replacements to any of the letters in S.</p>

            <a href="/inputs/problem2.html" target="_blank">Input data</a>
            <br />
            <br />
            <Table bordered striped>
                <tbody>
                    <tr>
                        <td>Sample Input</td>
                        <td>Sample Output</td>

                    </tr>

                    <tr>
                        <td>
                            <p className='coding-input'>7<br />
                                ABC<br />
                                2<br />
                                BA<br />
                                CA<br />
                                ABC<br />
                                2<br />
                                AB<br />
                                AC<br />
                                F<br />
                                0<br />
                                BANANA<br />
                                4<br />
                                AB<br />
                                AN<br />
                                BA<br />
                                NA<br />
                                FBHC<br />
                                4<br />
                                FB<br />
                                BF<br />
                                HC<br />
                                CH<br />
                                FOXEN<br />
                                8<br />
                                NI<br />
                                OE<br />
                                NX<br />
                                EW<br />
                                OI<br />
                                FE<br />
                                FN<br />
                                XW<br />
                                CONSISTENCY<br />
                                26<br />
                                AB<br />
                                BC<br />
                                CD<br />
                                DE<br />
                                EF<br />
                                FG<br />
                                GH<br />
                                HI<br />
                                IJ<br />
                                JK<br />
                                KL<br />
                                LM<br />
                                MN<br />
                                NO<br />
                                OP<br />
                                PQ<br />
                                QR<br />
                                RS<br />
                                ST<br />
                                TU<br />
                                UV<br />
                                VW<br />
                                WX<br />
                                XY<br />
                                YZ<br />
                                ZA</p>
                        </td>
                        <td>
                            <p className='coding-input'>Case #1: 2<br />
                                Case #2: -1<br />
                                Case #3: 0<br />
                                Case #4: 3<br />
                                Case #5: -1<br />
                                Case #6: 8<br />
                                Case #7: 100</p>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <br />
            <Button variant="dark" onClick={handleShow1}>
                Hint #1
            </Button>

            <br />
            <br />
            <Button variant="dark" onClick={handleShow2}>
                Hint #2
            </Button>
            <br />
            <br />

            <Modal show={show1} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Hint #1</Modal.Title>
                </Modal.Header>
                <Modal.Body>The equation from last week only applies to a singular rule that applies to all letters. Each letter has it's own rule and thus the equation does not apply. (It might actually hold you back)</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Hint #2</Modal.Title>
                </Modal.Header>
                <Modal.Body>Check coding articles on the Floyd–Warshall algorithm</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            <form name='form' onSubmit={handleSubmit}>
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