import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {
  
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const addFriend = () => {
    Axios.post("http://localhost:3001/addfriend", {
      name: name,
       age: age,
    })
      .then(() => {
        alert("Works");
    })
      .catch(() => {
        alert("Something wrong!")
      });
  };


  return (
    <div className="App">
      <div className="inputs">
        <input 
          type="text" 
          placeholder="Friend name..."
          onChange= {(event) => {setName(event.target.value)}}   
        />
        <input 
          type="text" 
          placeholder="Friend age..."
          onChange= {(event) => {setAge(event.target.value)}} 
        />
        <button onClick={addFriend} >Add Friend</button>
      </div>
      
    </div>
  );
}

export default App;
