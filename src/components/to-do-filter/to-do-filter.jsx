import "./to-do-filter.scss";

const ToDoFilter = () => {
  return (
    <div className="btn">
      <button className="btn-all">All</button>
      <button className="btn-All">Active</button>
      <button className="btn-done">Done</button>
    </div>
  );
};

export default ToDoFilter;
