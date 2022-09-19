import React from 'react'

const Viewdata = ({todos,deletetodo}) => {
  return todos.map(todo=>(
    <tr key={todo.name}>
        <td>{todo.name}</td>
        <td>{todo.description}</td>
        <td onClick={()=>deletetodo(todo.name)}><button className='btn btn-danger' >Delete</button></td>
    </tr>
  ))
}

export default Viewdata
