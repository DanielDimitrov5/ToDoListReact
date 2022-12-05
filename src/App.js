import './App.css';
import Heading from './components/Heading';
import ToDoList from './components/ToDoList';
import ChangebackroundButton from './components/ChangebackroundButton';


function App() {
  

  return (
    <div className="App">
      <Heading  text="ToDo List"/>
      <ToDoList />
      <ChangebackroundButton></ChangebackroundButton>
    </div>
  );
}

export default App;
