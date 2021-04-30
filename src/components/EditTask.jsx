import React, { useState } from "react";

const EditTask = ({ color, btnText, onEdit, newTask }) => {
  const [editting, setEditting] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [id, setId] = useState("");
  const [none, setNone] = useState(0);

  const setup = () => {
    if (!text) {
      setText(newTask.text);
      setDay(newTask.day);
      setReminder(newTask.reminder);
      setId(newTask.id);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return alert("Please type a Task in");
    }
    if (!day) {
      return alert("Please type a Day and Time in");
    }

    onEdit({ text, day, reminder, id }, id);
    setEditting(false);

    setId("");
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <>
      {editting ? (
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
              value={day}
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
          </div>{" "}
          <input
            type="submit"
            name="submit"
            id="submit"
            value="Apply Changes"
            className="btn"
            style={{ backgroundColor: color }}
          />
        </form>
      ) : (
        <form className="taskForm">
          <input
            onFocus={setup}
            type="button"
            name="submit"
            id="submit"
            value="Edit Task?"
            className="btn"
            onClick={() => setEditting(true)}
            style={{ backgroundColor: color }}
          />
        </form>
      )}
    </>
  );
};

export default EditTask;
