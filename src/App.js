import './App.css';
import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
//import fs from 'fs';
import Questions from './FormElements/Questions';
import SelectionBar from './FormElements/SelectionBar';
const DUMMY_DATA = [];


/* const DUMMY_DATA = [
  {
    id: 'e1',
    question: 'How many do you want?',
    type: 'number',
  },
  {
    id: 'e2',
    question: 'What do you need it for?',
    type: 'text',
  },
  {
    id: 'e3',
    question: 'When do you need it?',
    type: 'date',
  },
  {
    id: 'e4',
    question: 'What is your name?',
    type: 'text',
  },

]; */

function App() {
  const[questions, setQuestions] = useState(DUMMY_DATA);
  const addQuestionHandler = question => {
    setQuestions((prevQuestions) => {
      return [...prevQuestions, question ];
      console.log(question);
    });
  }
  
  const submitForm = () => {
    axios.post('http://localhost:3001/api/insert', {
      formData: questions
    }).then(response => {
      alert('Share this link to share your form:'+response.data.link);
      //console.log("In the frontend:"+ response.data.link);
      //alert('Successful insert2: ');
    });
  }
  return (
    <div className="App">
      <header>Form Creator</header>
      <SelectionBar onSaveQuestionData={addQuestionHandler}></SelectionBar>
      <Questions data={questions} ></Questions>
      <button onClick={submitForm}>Submit Form</button>
    </div>
  );
}

export default App;
