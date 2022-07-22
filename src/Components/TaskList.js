import React from 'react';
import Button from './Button';
import TaskItem from './TaskItem';


function TaskList(props) {

  return (
    <>
      <Button
        showAllTask={props.showAllTask}
        showActiveTask={props.showActiveTask}
        showCompleteTask={props.showCompleteTask}
      />
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, index) => (
            <TaskItem
              key={index}
              taskItem={task}
              id={index}
              deleteTask={props.deleteTask}
              editTask={props.editTask}
              toggleTask={props.toggleTask}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TaskList