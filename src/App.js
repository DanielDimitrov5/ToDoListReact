import './App.css';
import { useEffect } from 'react';
import Heading from './components/Heading';
import ToDoList from './components/ToDoList';
import ChangebackroundButton from './components/ChangebackroundButton';
import Footer from './components/Footer';


function App() {
  
  useEffect(() => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;   
  })

  return (
    <div className="App">
      <Heading  text="ToDo List"/>
      <ToDoList />
      <ChangebackroundButton></ChangebackroundButton>
      <Footer />
    </div>
  );
}

export default App;
