import "./to-do-filter.scss";

const ToDoFilter = ({ onFilter }) => {
  const dataBtn = [
    { name: "All", label: "Все" },
    { name: "Favourited", label: "Избранные" },
  ];

  const btn = dataBtn.map(({name, label}) => {
    return <button onClick={() => onFilter(name)} key={name}>{label}</button>;
  });

  return <div className="btn">{btn}</div>;
};

export default ToDoFilter;
