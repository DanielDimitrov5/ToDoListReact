import ListItem from "./ListItem";
import { useState } from "react";
import { v4 as idGenerator } from "uuid";

function ToDoList() {

    const [todos, setTodos] = useState(
        [
            {id: idGenerator(), task: "Learn React.js", isDone: false},
            {id: idGenerator(), task: "Go shopping", isDone: false},
            {id: idGenerator(), task: "Go to the gym", isDone: false},
            {id: idGenerator(), task: "Go to sleep", isDone: false},
        ]
    );

        function AddNewToDoOnBlur(e) {

            const input = e.target.value;

            if(input === '')
            return;

            const newToDo = { id: idGenerator(), task: e.target.value, isDone: false};

            setTodos(oldState => [
                ...oldState,
                newToDo
                ]
            )

            e.target.value = '';
        }

        function DeleteToDoOnClick(id){
            setTodos(oldState => oldState.filter(x=>  x.id !== id))
            console.log("delete! " + id);
        }

        function SetIsDonePropertyOnClick(id) {
            setTodos(oldState => {
                return oldState.map(todo => {
                    if(todo.id === id){
                        return {...todo, isDone: !todo.isDone}
                    }

                    return todo;
                })
            })
        }

    return( 
        <>
            <ul> 
                <input type="text" onBlur={AddNewToDoOnBlur}/>
                {todos.map(todo => 
                    <ListItem 
                    key={todo.id} 
                    task={todo.task}
                    isDone={todo.isDone} 
                    onDelete={DeleteToDoOnClick.bind(null, todo.id)} 
                    onClick={SetIsDonePropertyOnClick.bind(null, todo.id)}/>
                )}
            </ul>
        </>
    )
}

export default ToDoList;