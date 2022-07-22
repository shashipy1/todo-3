import React, { useState } from 'react';


function CreateTask() {
  const [inputValue, setInputValue] = useState([]);


  const handleChange = (e) => {
    setInputValue({ task: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateTask(inputValue);
    setInputValue({ task: '' });
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder='enter task'
        value={inputValue}
        onChange={handleChange} autoFocus />
      <button type='submit'>Add</button>
    </form>
  )
}

export default CreateTask;