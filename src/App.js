import "./App.css";
import { useState, createContext, useContext } from "react";
import TodoInput from "./Components/Input/TodoInput";
import TodoItem from "./Components/Item/TodoItem";

const TodoContext = createContext();

function App() {

  const [todoItems, setTodoItems] = useState([
    { todo: "Mow the lawn", complete: false },
    { todo: "Do Laundry", complete: false },
    { todo: "Make Dinner", complete: false },
  ]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
      ? (newTodoItems[index].complete = true) 
      : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems);
  };

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };

  return (
    <TodoContext.Provider value={todoItems}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          item={item}
          deleteTodoItem={deleteTodoItem}
          completeTodoItem={completeTodoItem}
          updateTodoItem={updateTodoItem}
        />
      ))}
      <TodoInput createTodoItem={createTodoItem} />
    </TodoContext.Provider>
  );
}

export default App;
