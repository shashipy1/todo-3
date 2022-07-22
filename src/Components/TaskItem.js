import React, { useState } from 'react';


function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState({});


  const setEditingState = (isEditing) => {
    setIsEditing({ isEditing: isEditing })
  }

  const toggleTask = () => {
    toggleTask(task.id)
  }

  const deleteTask = () => {
    deleteTask(task.id)
  }


  const handleChange = (e) => {
    setTask({ task: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    isEditing(task.id, task);
    setIsEditing({ isEditing: false })
  };


  return (
    <tr>
      {isEditing ? (
        <>
          <td>
            <form onSubmit={handleSubmit}>
              <input type="text" value={task}
                onChange={handleChange}
                autoFocus />
            </form>
          </td>
          <td>
            <button type='submit' onClick={handleSubmit}>SAVE</button>
            <button type='button' onClick={() => setIsEditing(false)}>BACK</button>
          </td>
        </>
      ) : (
        <>
          <td className='task' onClick={toggleTask}>
            <input type="checkbox" checked={task.isCompleted} />
            <span className={task.isCompleted ? 'Completed' : 'Not-Completed'} >{task.task}</span>
          </td>
          <td>
            <button onClick={() => setEditingState(true)}>Edit</button>
            <button onClick={deleteTask}>Delete</button>
          </td>
        </>
      )}
    </tr>
  )
}

export default TaskItem;