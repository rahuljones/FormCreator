import React, { useState } from 'react';
import ResponseQuestionItem from './ResponseQuestionItem';

function ResponseQuestions(props) {
  const [inputData, setInputData] = useState({});

  // Callback function to receive input data from child component
  const handleChildInputChange = (id, value) => {
    // Store or process the input data as needed
    setInputData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    
    <div>
        {props.data.length===0 ? <p>Create your form!</p> : props.data.map((item) => (
          <ResponseQuestionItem
          key={item.id}
          id={item.id} // Pass the id to uniquely identify the question
          question={item.question}
          type={item.type}
          onInputChange={handleChildInputChange} // Pass the callback
          />
        ))}
        <button onClick={props.onQuestionsInput(inputData)}>Get Info</button>
    </div>
  );
}

export default ResponseQuestions;
