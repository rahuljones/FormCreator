import './App.css';
import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import { useParams } from 'react-router-dom';

//import fs from 'fs';
import ResponseQuestions from './ResponseElements/ResponseQuestions';
import { type } from '@testing-library/user-event/dist/type';
var retrievedData;
var rawQuestions = [];


    

function ResponseApp() {
  const { paramName } = useParams();
  console.log(paramName);
  const requestLink = 'http://localhost:3001/api/get/'+paramName;
  const [questions, setQuestions] = useState([]);
  const [questionsInput, setQuestionsInput] = useState({});
  useEffect(()=> {
    axios.get(requestLink).then((response) => {
      retrievedData = response.data;
      rawQuestions = JSON.parse(retrievedData[0].questions);
      const questionObjects = rawQuestions.map((rawQuestion) => ({
        id: rawQuestion.id,
        type: rawQuestion.type,
        question: rawQuestion.question,
      }));
      setQuestions(questionObjects);
    }).catch((error) => {
      console.error(error);
    });
  }, [])
  const printThing = () => {
    console.log('This is it:')
    console.log(questionsInput);
  }
  const handleQuestionsInput = (inputFromChild) => {
    setQuestionsInput(inputFromChild);
  };
  return (
    <div className="App">
      <header>Form Submitter</header>
      <ResponseQuestions data={questions} onQuestionsInput={handleQuestionsInput}></ResponseQuestions>
      <button onClick={printThing}></button>
    </div>
  );
}

export default ResponseApp;


