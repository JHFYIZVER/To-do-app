/* eslint-disable react/prop-types */
import "./to-do-add-form.scss";
import { useState } from "react";

const ToDoAddForm = ({ onAddItem }) => {
  const [title, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="add-form">
      <input
        value={title}
        onChange={handleChange}
        placeholder="Введите задачу..."
        type="text"
      />
      <button onClick={() => onAddItem(title)}>Добавить</button>
    </div>
  );
};

export default ToDoAddForm;
