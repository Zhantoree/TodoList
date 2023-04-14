import logo from './logo.svg';
import './App.css';
import AddToDo from "./components/AddToDo/AddToDo";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import {useState} from "react";

function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'first',
            status: 'true'
        },
        {
            id: 2,
            title: 'second',
            status: 'true'
        },
        {
            id: 3,
            title: 'third',
            status: 'false'
        }
    ]);

  return (
    <div className="App">
      <Header/>
      <AddToDo/>
      <TodoList/>
    </div>
  );
}

export default App;
