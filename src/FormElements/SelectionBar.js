import React, { useState } from 'react';

function Question(props) {
    const [enteredQuestion, setEnteredQuestion] = useState('');
    const [enteredType, setEnteredType] = useState('text');

    const questionChangeHandler = (event) => {
        setEnteredQuestion(event.target.value);
    };
    const typeChangeHandler = (event) => {
        setEnteredType(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const questionData = {
            id: Math.random().toString(),
            question: enteredQuestion,
            type: enteredType
        };
        console.log(questionData);
        console.log('called');

        props.onSaveQuestionData(questionData);
        setEnteredQuestion('');
    };
  return (
    <form onSubmit={submitHandler}>
        <select name="questionType" id="cars" onChange={typeChangeHandler}>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
            <option value="email">Email</option>
            <option value="url">URL</option>
        </select>
        <input type='text' placeholder="Question:" value={enteredQuestion}onChange={questionChangeHandler}></input>
        <button type='submit'></button>
    </form>
  );
}

export default Question;
