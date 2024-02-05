import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { IoCloseCircle } from "react-icons/io5";
import { TiEdit } from "react-icons/ti";


function Todo({todos,completeTodo,removeTodo,updatedTodo}) {
   
   const [edit,setEdit] = useState({
    id:null,
    value:''
   })

   const submitUpdate = (value) => {
    updatedTodo(edit.id , value)
    setEdit({
      id:null,
      value:''
    });
   }

   if(edit.id) {
       return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
   }


  return todos.map((todo,index) => (
   <div className={todo.isComplete ? 'todo-row complete' :'todo-row'} 
       key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
       {todo.text}  
      </div>                                      
      <div className='icons'>
      <IoCloseCircle onClick={() => removeTodo(todo.id)}
      className='delete-icon'/>
      <TiEdit onClick={() => setEdit({id :todo.id, value: todo.text})}
      className='delete-icon'/>
      </div>

   </div>
  ))
}

export default Todo