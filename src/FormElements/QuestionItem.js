import React, { useState } from 'react';
import '../Card.css'
function QuestionItem(props) {
  
  

  return (
    <div className='card'>
        <p>{props.question}</p>
        {props.type==='text' && <input type='text'></input>}
        {props.type==='number' && <input type='number'></input>}
        {props.type==='date' && <input type='date'></input>}
        {props.type==='email' && <input type='email'></input>}
        {props.type==='url' && <input type='url'></input>}
    </div>
  );
}

export default QuestionItem;
