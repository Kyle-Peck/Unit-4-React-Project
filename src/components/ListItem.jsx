import { FaTimes } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import AddTask from "./AddTask";

const ListItem = ({ task, onDelete, onToggle, toggleEdit }) => {
  return (
    <div
      onDoubleClick={() => {
        onToggle(task.id);
      }}
      className={`item ${task.reminder ? "remind" : ""}`}
    >
      <div className="left">
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>
      <div className="right">
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
        <ImPencil
          onClick={() => toggleEdit(task)}
          style={{ color: "green", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default ListItem;
