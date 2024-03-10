import Search from "./components/to-do-search/to-do-search";
import ToDoList from "./components/to-do-list/to-do-list";
import ToDoFilter from "./components/to-do-filter/to-do-filter";
import ToDoAddForm from "./components/to-do-add-form/to-do-add-form";

import { useState } from "react";

import "./App.scss";

const App = () => {
  const data = [
    { id: 1, title: "Learn React", favourited: false },
    { id: 2, title: "Learn Redux", favourited: false },
    { id: 3, title: "Learn React Router", favourited: false },
    { id: 4, title: "Learn React Native", favourited: false },
  ];

  const [state, setState] = useState(data);
  const [filter, setFilter] = useState("All");
  let maxId = state.length;
  const onDeleteItem = (id) => {
    setState(state.filter((item) => item.id !== id));
  };

  const onFavourites = (id) => {
    setState(
      state.map((item) => {
        if (item.id === id) {
          return { ...item, favourited: !item.favourited };
        }
        return item;
      })
    );
  };

  const onAddItem = (title) => {
    const newItem = {
      id: ++maxId,
      title,
      favourited: false,
    };
    if (title.trim() !== "") {
      setState([...state, newItem]);
    } else {
      alert("Введите задачу");
    }
  };

  const onSearch = (value) => {
    console.log(value);
  };

  const onFilter = (filter) => {
    setFilter(filter);
  };

  let filteredData = state;
  if (filter === "Favourited") {
    filteredData = state.filter((el) => el.favourited);
  }

  return (
    <div className="container">
      <h1 className="title">My todo-app</h1>
      <div className="search-panel">
        <Search onSearch={onSearch} /> <ToDoFilter onFilter={onFilter} />
      </div>
      <ToDoAddForm onAddItem={onAddItem} />
      <div>
        {filteredData.length ? (
          <ToDoList
            data={filteredData}
            onFavourites={onFavourites}
            onDeleteItem={onDeleteItem}
          />
        ) : (
          <div className="without-task">Задач нет!</div>
        )}
      </div>
    </div>
  );
};

export default App;
