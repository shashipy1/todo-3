import React, { useState } from 'react';


function CreateTask(props) {
  const [inputValue, setInputValue] = useState([]);


  const handleChange = (e) => {
    setInputValue({ task: e.target.value })
    console.log("handle change is rummin",inputValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.Createtask(inputValue.task);
    setInputValue({ task: '' });
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder='enter task'
        value={inputValue.task}
        onChange={handleChange} autoFocus
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default CreateTask;