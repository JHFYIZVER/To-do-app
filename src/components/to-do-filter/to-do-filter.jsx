import { useState } from "react";
import "./to-do-filter.scss";

const ToDoFilter = ({onFilter}) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const dataBtn = [
    { name: "All", label: "Все" },
    { name: "Favourited", label: "Избранные" },
  ];

  const handleFilterClick = (name) => {
    setActiveFilter(name);
    onFilter(name);
  };

  const btn = dataBtn.map(({ name, label }) => (
    <button
      className={activeFilter === name ? "active" : "buttons"}
      onClick={() => handleFilterClick(name)}
      key={name}
    >
      {label}
    </button>
  ));

  return <div className="btn">{btn}</div>;
};

export default ToDoFilter;
