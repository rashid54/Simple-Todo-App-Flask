import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Select } from './components/Select';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [formData, setformData] = useState("");

  const baseUrl = "http://127.0.0.1:5000";

  const getTodoList = async ()=> {
    const response = await fetch(baseUrl + "/note");
    const jsonData = await response.json();
    setTodos(jsonData);
  }

  const deleteTodo = async (todoId: number)=> {
    const response = await fetch(baseUrl + "/note/"+ todoId, {method:"DELETE"});
    const jsonData = await response.json();
    setTodos(jsonData);
  }
  const addTodo = async (note: string)=> {
    const response = await fetch(baseUrl + "/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"note": note})
    }
    );
    const jsonData = await response.json();
    setTodos(jsonData);

    setformData("");
  }

  useEffect(()=>{
    getTodoList();
  }, [])

  const handleSubmit = (e: any)=>{
    e.preventDefault();
    addTodo(formData);
  }
  const handleChange = (e: any)=>{
    setformData(e.target.value);
    console.log(formData);
  }
  const handleDelete = (e:any, todoId:number)=>{
    e.preventDefault();
    deleteTodo(todoId);
  }
  return (
    <div className="App h-100 d-flex flex-wrap align-items-start">
      <div className="w-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav w-100 d-flex justify-content-between">
              {
                window.token?
                  <>
                    <a className="nav-item nav-link mx-3" id="home" href="/">Home</a>
                    <a className="nav-item nav-link mx-3" id="logout" href="/logout">Logout</a>
                  </>:<>
                    <a className="nav-item nav-link mx-3" id="login" href="/login">Login</a>
                    <a className="nav-item nav-link mx-3" id="signUp" href="/sign-up">Sign Up</a>
                  </>

              }
              {/* {% if user.is_authenticated %}
              <a className="nav-item nav-link" id="home" href="/">Home</a>
              <a className="nav-item nav-link" id="logout" href="/logout">Logout</a>
              {% else %}
              <a className="nav-item nav-link" id="login" href="/login">Login</a>
              <a className="nav-item nav-link" id="signUp" href="/sign-up">Sign Up</a>
              {% endif %} */}
            </div>
          </div>
        </nav>  
      </div>
      <div className="vh-100 w-100" style={{backgroundColor: "#D3D3D3"}}>
      <section >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">

              <div className="card" style={{borderRadius: "15px"}}>
                <div className="card-body p-5">

                  <h6 className="mb-3">Awesome Todo List</h6>

                  <form className="d-flex justify-content-start align-items-start mb-4" onSubmit={handleSubmit} >
                    <div className="form-outline flex-fill">
                      <input type="text" value={formData} onChange={handleChange} id="form3" className="form-control" />
                      <label className="form-label" htmlFor="form3">What do you need to do today?</label>
                    </div>
                    <Select />
                    <button type="submit" className="btn btn-primary ms-2">Add</button>
                  </form>

                  <ul className="list-group mb-0">
                    {
                      todos?.map(todo =>
                        <li
                          key={todo.id}
                          className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                          <div className="d-flex align-items-center">{todo.data}</div>
                          <div>
                            <span className='mx-4 p-1 font-weight-bold rounded border border-secondary'>{todo.priority}</span>
                            <a href="#!" data-mdb-toggle="tooltip" title="Remove item" onClick={(e)=>handleDelete(e,todo.id)}>
                              <i className="fa fa-times text-primary"></i>
                            </a>
                          </div>
                          
                        </li>
                      )
                    }
                    
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default App;
