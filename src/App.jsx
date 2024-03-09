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

  let maxId = state.length;

  const onAddItem = (title) => {
    const newItem = {
      id: ++maxId,
      title,
      favourited: false,
    };
    setState([...state, newItem]);
  };

  return (
    <div className="container">
      <h1 className="title">My todo-app</h1>
      <div className="search-panel">
        <Search /> <ToDoFilter />
      </div>
      <ToDoAddForm onAddItem={onAddItem} />
      <div>
        <ToDoList
          data={state}
          onFavourites={onFavourites}
          onDeleteItem={onDeleteItem}
        />
      </div>
    </div>
  );
};

export default App;
