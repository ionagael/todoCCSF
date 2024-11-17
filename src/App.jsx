import { nanoid } from "nanoid";
import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // asking if this task has the same ID as the edited task
      if (id === task.id) {
        // we will use the object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
  }
  
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // check if this task has the same id of the edited task
      if (id === task.id) {
        // Copy the task updating its name
        return { ...task, name: newName };
      }
      // Return the original task if not the edited task
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks?.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} editTask={editTask} />
  ));

  function addTask(name) {
    const newTask = { id: `t-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length !== 1 ? "classes" : "class";
  const headingText = `${taskList.length} ${tasksNoun} chosen`;

  return (
    <div className="todoapp stack-large">
      <h1>4 courses listed</h1>
      <Form addTask={addTask} />
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul>
    </div>
  );
}

export default App;