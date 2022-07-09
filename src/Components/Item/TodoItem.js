

const TodoItem = ({
  item,
  index,
  deleteTodoItem,
  completeTodoItem,
  updateTodoItem,
}) => {

  return (
    <div className="todo-list">
      <li style={{ textDecoration: item.complete ? "line-through" : "" }}>
        <span className="title">{item.todo}</span>

        <span className="btns">
          <button onClick={() => completeTodoItem(index)}>Complete</button>
          <button onClick={() => updateTodoItem(index)}>Update</button>
          <button onClick={() => deleteTodoItem(index)}>X</button>
        </span>
      </li>
    </div>
  );
};

export default TodoItem;
