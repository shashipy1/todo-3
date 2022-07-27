import React, { useState } from 'react';


function TaskItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState({});


  // console.log("TaskItem",props)

  const setEditingState = (isEditing) => {
    setIsEditing({ isEditing: isEditing })
  }

  const toggleTask = () => {
    props.toggleTask(task.id);
    console.log("my task is", task)
    console.log("task.id is ", task.id)
  }

  const deleteTask = () => {
    props.deleteTask(task.id);
  }


  const handleChange = (e) => {
    // setTask({ task: e.target.taskItem.value });
    console.log("target", e.target.value)
    console.log("handle fun is running", e)
    // console.log(e.target.value, e.currentTarget.value)
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
              <input type="text"
                value={props.taskItem.task}
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
            {console.log("task item comp is running isEditing is false", isEditing, props, task.task)}
            <input type="checkbox" checked={task.isCompleted} />
            <span className={task.isCompleted ? 'Completed' : 'Not-Completed'} >{props.taskItem.task}</span>
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