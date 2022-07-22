import React, { useState } from 'react';
import TaskList from './TaskList';
import CreateTask from './CreateTask';


function Main() {
  const [tasks, setTasks] = useState([]);  

  const Createtask = (task) => {
    if (task.trim() === '') {
      alert("You must write something!");
      return;
    }
    tasks.push({ task, isComplete: true });
    setTasks({ tasks: tasks });
    console.log("task", tasks)
    localStorage.setItem('lists', JSON.stringify(tasks))
  }

  const toggleTask = (taskId) => {
    const taskItem = tasks[taskId];
    taskItem.isComplete = !taskItem.isComplete;
    setTasks({ tasks: tasks })
    console.log("toggleTask", tasks)
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
    const activetodo = tasks.filter(todo => todo.isComplete === true)
    setTasks({ tasks: activetodo })
    console.log("show active task", activetodo);
  }

  const showCompleteTask = () => {
    const completedtodo = tasks.filter(todo => todo.isComplete === false)
    this.setState({ tasks: completedtodo })
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