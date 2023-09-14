import React, { useState } from 'react';
import '../Card.css'
function ResponseQuestionItem(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Call the callback function provided by the parent with input data
    props.onInputChange(props.id, value);
  };
  

  return (
    <div className='card'>
        <p>{props.question}</p>
        {props.type === 'text' && <input type='text' value={inputValue} onChange={handleInputChange} />}
      {props.type === 'number' && <input type='number' value={inputValue} onChange={handleInputChange} />}
      {props.type === 'date' && <input type='date' value={inputValue} onChange={handleInputChange} />}
      {props.type === 'email' && <input type='email' value={inputValue} onChange={handleInputChange} />}
      {props.type === 'url' && <input type='url' value={inputValue} onChange={handleInputChange} />}
    </div>
  );
}

export default ResponseQuestionItem;
