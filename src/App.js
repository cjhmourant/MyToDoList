import React, {useState,useEffect} from "react";
import './App.css';

//importing components
import Form from "./components/Form";
import ToDoList from "./components/togolist";


function App() {

  //State Generation
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect
  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line
  }, [todos,status])

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Holiday Bucket List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        status = {status}
        filteredTodos = {filteredTodos}
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus ={setStatus}
        setFilteredTodos = {setFilteredTodos}
        />
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
