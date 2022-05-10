import { Button } from './components/Button';
import './App.css';
import { Span } from './components/Span';
import { useState } from 'react';

function App() {
  const[count,setCount] = useState(0)

  // const item = () => {
  //   setCount((prevState)=> {
  //     return{
  //       ...prevState,
  //       count:prevState.count+1
  //     }
  //   })
  // }
  const decrementCount = ()=> {
    setCount((prevCount)=> {
      return prevCount - 1
    })
  }
  return (
    <div className="App">
    <Span span = '0'/>
    <Button button = '+'/>
    <Button button = '-' onClick = {decrementCount}/>
    </div>
  );
}

export default App;
