import { useState } from 'react'
import React from 'react'
import AddTodo from './AddTodo'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo'
uuidv4();
function TodoWrapper() {
    const [todos, SetTodos]=useState([])

    const addTodo=todo=>{
        SetTodos([...todos , {
            id:uuidv4(),
            task:todo,
            complete:false,
            isEditing:false
        }])
        
    }
    console.log(todos)
    const toggleComplete=id=>{
      SetTodos(todos.map(todo=>todo.id===id?{...todo,complete:!toggleComplete}:todo))
    }
  return (
    <div className='TodoWrapper'>
      <h1>Task is completed</h1>
    <AddTodo addTodo={addTodo}/>
    {
       todos.map((todo , index)=>(
        <Todo task={todo}
         key={index}
         toggleComplete={toggleComplete}
         />
       ))
    }
     
    </div>
  )

}

export default TodoWrapper