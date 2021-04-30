import React, { useState } from "react";

const AddTask = ({ color, btnText, onAdd, newTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [id, setId] = useState(4);

  const [tempID, setTempID] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return alert("Please type a Task in");
    }
    if (!day) {
      return alert("Please type a Day and Time in");
    }

    onAdd({ text, day, reminder, id });

    setId(id + 1);
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="taskForm" onSubmit={onSubmit}>
      <div className="formInput">
        <label htmlFor="text">Task</label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="formInput">
        <label htmlFor="day">Day</label>
        <input
          type="text"
          name="day"
          id="day"
          placeholder="Add Day and Time"
          value={newTask ? newTask.day : day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="formCheck">
        <label htmlFor="reminder">Reminder?</label>
        <input
          type="checkbox"
          name="reminder"
          id="reminder"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input
        type="submit"
        name="submit"
        id="submit"
        value={btnText}
        className="btn"
        style={{ backgroundColor: color }}
      />
    </form>
  );
};

export default AddTask;
