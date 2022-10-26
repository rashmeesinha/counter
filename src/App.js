
import './App.css';
import {useState} from 'react';

function App() {
const [count, setCount]=useState(0);

function countIncHandle(){
  setCount(count+1);
}
function countDecHandle(){
  if(count>0)
  setCount(count-1);
}


  return (
    <div className="App">
  <button onClick={countIncHandle}>+</button>
  <label>{count}</label>
  <button onClick={countDecHandle}>-</button>
    </div>
  );
}

export default App;
