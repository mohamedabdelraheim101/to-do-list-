import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newitem = { completed: false, text }
    setTodos([...todos, newitem])
    
    inputRef.current.value = "";

  }

  const handleItemDone = (index) => {
    const newtodos = [...todos];
    newtodos[index].completed = !newtodos[index].completed
    setTodos(newtodos)
  }

const handleDeleteItem=(index)=>{
  const newtodos = [...todos];
newtodos.splice(index,1);
setTodos(newtodos);

}

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-conatiner">

        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
            <div className="item"> 
               <li className={completed ? "done" : ""}
                key={index} 
                onClick={() => handleItemDone(index)}>{text}</li>

                <span onClick={()=>handleDeleteItem(index)}  >❌</span>

            </div>);
          })}
        </ul>
        <input ref={inputRef} placeholder="enter item" />
        <button onClick={handleAddTodo} >Add</button>
      </div>




    </div>
  );
}

export default App;