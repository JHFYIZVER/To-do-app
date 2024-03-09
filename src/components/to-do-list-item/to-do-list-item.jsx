/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "./to-do-list-item.scss";

const ToDoListItem = ({ favourited, title, onFavourites, onDeleteItem }) => {
  let clazz = "title-list-item";

  if (favourited) {
    clazz += " favourited";
  }

  return (
    <li className="to-do-list-item">
      <h2 className={clazz}>{title}</h2>
      <div>
        <button onClick={onFavourites} type="button" className="favourites">
          В избранное
        </button>
        <button onClick={onDeleteItem} type="button" className="delete">
          Удалить
        </button>
      </div>
    </li>
  );
};

ToDoListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ToDoListItem;
