import './App.css';
import Heading from './components/Heading';
import ToDoList from './components/ToDoList';

function App() {
  
  return (
    <div className="App">
      <Heading  text="ToDo List"/>
      <ToDoList />
    </div>
  );
}

export default App;
