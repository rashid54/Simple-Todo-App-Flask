import { useEffect, useState } from "react";
import { CustomSelect } from "../components/select/CustomSelect";
import { profiles } from "../SampleData";

export const Home = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [formData, setformData] = useState("");

	const baseUrl = "http://127.0.0.1:5000";

	const getTodoList = async () => {
		const response = await fetch(baseUrl + "/note");
		const jsonData = await response.json();
		setTodos(jsonData);
	}

	const deleteTodo = async (todoId: number) => {
		const response = await fetch(baseUrl + "/note/" + todoId, { method: "DELETE" });
		const jsonData = await response.json();
		setTodos(jsonData);
	}
	const addTodo = async (note: string) => {
		const response = await fetch(baseUrl + "/note", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ "note": note })
		}
		);
		const jsonData = await response.json();
		setTodos(jsonData);

		setformData("");
	}

	useEffect(() => {
		getTodoList();
	}, [])

	const handleSubmit = (e: any) => {
		e.preventDefault();
		addTodo(formData);
	}
	const handleChange = (e: any) => {
		setformData(e.target.value);
		console.log(formData);
	}
	const handleDelete = (e: any, todoId: number) => {
		e.preventDefault();
		deleteTodo(todoId);
	}

	const render = (x: any)=> (
		<>
			<p style={{margin: "0px"}}>id: {x.id}</p>
			<p style={{margin: "0px"}}>first_name: {x.first_name}</p>
			<p style={{margin: "0px"}}>last_name: {x.last_name}</p>
			<p style={{margin: "0px"}}>gender: {x.gender}</p>
			<p style={{margin: "0px"}}>email: {x.email}</p>
			{/* <p>ip_address: {props.x.ip_address}</p> */}
			{/* <hr 
				style={{
					width: "80%",
					// height: "0px",
					margin: "8px auto 0px",
					// borderTop: "0px",
					// borderBottom: "6px",
					// borderStyle: "dotted",
					borderColor: "#5D5D5D"
				}}
			/> */}
			</>
	)
	const filter = (x:any, inputValue: string) => x.first_name.toLowerCase().includes(inputValue.toLowerCase())
  return (
		<div className="vh-100 w-100" style={{ backgroundColor: "#D3D3D3" }}>
			<section >
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-xl-10">
							<div className="card" style={{ borderRadius: "15px" }}>
								<div className="card-body p-5">
									<h6 className="mb-3">Todo List</h6>
									<form className="d-flex justify-content-start align-items-start mb-4" onSubmit={handleSubmit} >
										<div className="form-outline flex-fill">
											<input type="text" value={formData} onChange={handleChange} id="form3" className="form-control" />
											<label className="form-label" htmlFor="form3">What do you need to do today?</label>
										</div>
										<div className="w-25 mx-2"><CustomSelect placeholder="Assign to" render={render} options={profiles} filterByText={filter}/></div>
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
														<a href="#!" data-mdb-toggle="tooltip" title="Remove item" onClick={(e) => handleDelete(e, todo.id)}>
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
	)
}