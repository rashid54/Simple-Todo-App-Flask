import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState<[Todo]>([
    {
      "data": "notenum 1",
      "date": "Tue, 28 Mar 2023 10:52:45 GMT",
      "id": 4,
      "user_id": 2
    }
  ])
  const [formData, setformData] = useState("")

  useEffect(()=>{
    // setTodos()
  }, [todos,])

  const handleSubmit = (e: any)=>{
    e.preventDefault();
    
  }
  const handleChange = (e: any)=>{
    setformData(e.target.notenum);
    console.log(formData);
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
            <div className="navbar-nav">
              {
                window.token?
                  <>
                    <a className="nav-item nav-link" id="home" href="/">Home</a>
                    <a className="nav-item nav-link" id="logout" href="/logout">Logout</a>
                  </>:<>
                    <a className="nav-item nav-link" id="login" href="/login">Login</a>
                    <a className="nav-item nav-link" id="signUp" href="/sign-up">Sign Up</a>
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
      <div className="vh-100 w-100" style={{backgroundColor: "#e2d5de"}}>
      <section >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">

              <div className="card" style={{borderRadius: "15px"}}>
                <div className="card-body p-5">

                  <h6 className="mb-3">Awesome Todo List</h6>

                  <form className="d-flex justify-content-start align-items-start mb-4">
                    <div className="form-outline flex-fill">
                      <input type="text" value={formData} onChange={handleChange} id="form3" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3">What do you need to do today?</label>
                    </div>
                    <button type="submit" onSubmit={handleSubmit} className="btn btn-primary btn-lg ms-2">Add</button>
                  </form>

                  <ul className="list-group mb-0">
                    {
                      todos?.map(todo =>
                        <li
                          key={todo.id}
                          className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                          <div className="d-flex align-items-center">{todo.data}</div>
                          <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                            <i className="fa fa-times text-primary"></i>
                          </a>
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
