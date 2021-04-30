import Header from "./components/Header";
import Tasks from "./components/Tasks";
//imrs
import React, { useState } from "react";
// import EditTask from "./components/EditTask";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  // const [showEditTask, setShowEditTask] = useState(false);
  // const [newTask, setNewTask] = useState({});
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Food Shopping",
      day: "Feb 6th at 4:30pm",
      reminder: false,
    },
    {
      text: "Take Test",
      day: "Monday 5pm",
      reminder: true,
      id: 3,
    },
  ]);

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );

    console.log(tasks);
  };

  const onAdd = (task) => {
    setTasks([...tasks, task]);
  };

  // const onEdit = (editedTask, id) => {
  //   setTasks(tasks.map((task) => (task.id === id ? editedTask : task)));
  //   setShowEditTask(false);
  //   console.log(tasks);
  // };

  // const toggleEdit = (task) => {
  //   setShowEditTask(!showEditTask);
  //   setShowAddTask(false);
  //   setNewTask(task);
  //   console.log(task);
  //   setTimeout(() => {
  //     setNone(0);
  //     console.log(none);
  //   }, 1000);
  // };

  return (
    <div className="container">
      <Header
        onShowAdd={() => {
          setShowAddTask(!showAddTask);
          // setShowEditTask(false);
        }}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={onAdd} btnText="Save Task" />}
      {/* {showEditTask && (
        <EditTask
          onEdit={onEdit}
          newTask={newTask}
          btnText="Apply Changes"
          color="green"
        />
      )} */}

      <Tasks
        // toggleEdit={toggleEdit}
        tasks={tasks}
        onDelete={onDelete}
        onToggle={toggleReminder}
      />
    </div>
  );
};
export default App;
