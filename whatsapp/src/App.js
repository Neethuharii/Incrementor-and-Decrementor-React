import {useState} from 'react'


function App(){
const [count,setCount]=useState(0)
//let count=0;
const AddCount=()=>{
setCount(count+1)
}
const subCount=()=>{
  setCount(count-1)
}
return(
  <div>
  <button onClick={AddCount}> ADD</button>
  
  <button onClick={subCount}> sub</button>
  <h1>COUNTER:{count}</h1>
  </div>
);
}
export default App