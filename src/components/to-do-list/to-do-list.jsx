/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import ToDoListItem from "../to-do-list-item/to-do-list-item";
import "./to-do-list.scss";

const ToDoList = ({ data, onFavourites, onDeleteItem }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ToDoListItem
        key={id}
        {...itemProps}
        onDeleteItem={() => onDeleteItem(id)}
        onFavourites={() => onFavourites(id)}
      />
    );
  });
  return <ul className="to-do-list">{elements}</ul>;
};

ToDoList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ToDoList;
