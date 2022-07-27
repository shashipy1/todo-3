import React, { useState } from 'react';
import TaskList from './TaskList';
import CreateTask from './CreateTask';


const items = [];
function Main() {
  const [tasks, setTasks] = useState([]);  


  const Createtask = (task) => {
    // console.log("task value", task)
    if (task.trim() === '') {
      alert("You must write something!");
      return;
    }
    items.push({ task, isComplete: true });
    setTasks(items);
    console.log("task", tasks)
    localStorage.setItem('lists', JSON.stringify(items))
  }

  const toggleTask = (taskId) => {
    const taskItem = tasks[taskId];
    console.log("taskitem is ", taskItem)
    console.log("taskid is", taskId)
    // taskItem.isComplete = !taskItem.isComplete;
    setTasks({ task: tasks });
    // console.log("toggleTask", tasks)
  }


  const deleteTask = (taskId) => {
    tasks.splice(taskId, 1)
    setTasks({ tasks });
  }

  const editTask = (taskId, task) => {
    const taskItem = tasks[taskId];
    taskItem.task = task;
    setTasks({ tasks: tasks })
  }

  const showAllTask = () => {
    setTasks({ tasks: tasks });
  }

  const showActiveTask = () => {
    const activetodo = tasks.filter((todo) => todo.isComplete === true)
    setTasks(activetodo)
    console.log("show active task", activetodo);  
  }

  const showCompleteTask = () => {
    const completedtodo = tasks.filter((todo) => todo.isComplete === false)
    setTasks(completedtodo)
    console.log("completed", completedtodo)
  }


  return (
    <div>
      <div className='main'>
        <h1>Todo</h1>
        <div className='content'>
          <CreateTask Createtask={Createtask}/>
          <br />
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleTask={toggleTask}
            showAllTask={showAllTask}
            showActiveTask={showActiveTask}
            showCompleteTask={showCompleteTask}
          />
        </div>
      </div>

    </div>
  )
}

export default Main;