/* eslint-disable react/prop-types */
import "./to-do-add-form.scss";
import { useState } from "react";

const ToDoAddForm = ({ onAddItem }) => {
  const [title, setValue] = useState("");

  const resetValue = () => {
    onAddItem(title)
    setValue('')
  }

  return (
    <div className="add-form">
      <input
        value={title}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Введите задачу..."
        type="text"
      />
      <button onClick={resetValue}>Добавить</button>
    </div>
  );
};

export default ToDoAddForm;
