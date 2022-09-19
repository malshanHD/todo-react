import React,{useState, useEffect} from 'react'
import Viewdata from './Viewdata';

const getDataFromLS=()=>{
  const dataList = localStorage.getItem('todos');
  if(dataList){
    return JSON.parse(dataList);
  }
  else
  {
    return []
  }
}

export default function Home() {
  const [todos, setTodos]=useState(getDataFromLS());

  const [name, setName]=useState('');
  const [description, setDescription]=useState('');

  const haddleAddTodoBtn=(e)=>{
    e.preventDefault();
    let todo={
      name,
      description
    }
    setTodos([...todos,todo]);
    setName('');
    setDescription('');
  }

  const deletetodo=(name)=>{
    const filterTodos=todos.filter((element, index)=>{
      return element.name !== name
    })
    setTodos(filterTodos);
  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])



  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center ">
            <div className="col-md-8">
                <div className="card l-bg-cyan">
                    <div className="card-header">
                        <h3 className='fw-bold'>My Todos</h3>
                    </div>
                    <div className="card-body">
                      <form className='form-group' onSubmit={haddleAddTodoBtn}>
                        <input type="text" name="todo" id="todo" className="form-control mt-2" placeholder="Todo name " aria-label="Recipient's username" aria-describedby="basic-addon2"
                          onChange={(e)=>setName(e.target.value)} value={name}/>

                          <input type="text" name="description" id="description" className="form-control mt-2" placeholder="Description " aria-label="Description" aria-describedby="basic-addon2"
                          onChange={(e)=>setDescription(e.target.value)} value={description}/>
                          <div className="input-group-append d-grid gap-2">
                            <button className="btn btn-success btn-block mt-3 fw-bold" type="submit">CREATE</button>
                          </div>
                      </form>
                    </div>
                </div>

                <div className="card mt-5 l-bg-green">
                  <div className="card-body">
                                    {todos.length>0&&<>

                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Task name</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Viewdata todos={todos} deletetodo={deletetodo}/>
                      </tbody>
                    </table>
                  </div>


                  </>}
                  {todos.length < 1 && <div>
                    <div className="card">
                      <p className='text-dark fw-bold text-danger fst-italic'>No Tasks added yet</p>
                    </div>
                    </div>}
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
