import { Button } from './components/Button';
import './App.css';
import { Span } from './components/Span';
import { useState } from 'react';


function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
    <Span span = {count}/>
    <Button setCount = {setCount} title = '+'/>
    <Button setCount = {setCount} title = '-' />
    </div>
  );
  }
  
export default App;
