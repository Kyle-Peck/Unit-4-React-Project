import ListItem from "./ListItem";

const Tasks = ({ tasks, onDelete, onToggle, onDoup, toggleEdit }) => {
  return (
    <>
      {tasks.map((task) => (
        <ListItem
          onToggle={onToggle}
          task={task}
          key={task.id}
          onDelete={onDelete}
          toggleEdit={toggleEdit}
        />
      ))}
    </>
  );
};

export default Tasks;
