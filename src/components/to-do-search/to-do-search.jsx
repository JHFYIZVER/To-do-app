import "./to-do-search.scss";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onUpdateSearch = (value) => {
    setValue(value);
    onSearch(value);
  };

  return (
    <input
      onChange={e => onUpdateSearch(e.target.value)}
      value={value}
      className="search"
      type="text"
      placeholder="Поиск..."
    />
  );
};

export default Search;
