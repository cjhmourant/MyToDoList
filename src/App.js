import React, {useState} from "react";
import './App.css';

//importing components
import Form from "./components/Form";
import ToDoList from "./components/togolist";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>Charlie's To do List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        />
      <ToDoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
