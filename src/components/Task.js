import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""} `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h6>
        {task.text}
        <FaTimes className="faTimes" onClick={() => onDelete(task.id)} />
      </h6>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
