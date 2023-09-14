import React, { useState } from 'react';
import QuestionItem from './QuestionItem';

function Questions(props) {
  
  

  return (
    <div>
        {props.data.length===0 ? <p>Create your form!</p> : props.data.map((item) => (
          <QuestionItem
            key={item.id}
            question={item.question} 
            type={item.type} 
          />
        ))}
    </div>
  );
}

export default Questions;
