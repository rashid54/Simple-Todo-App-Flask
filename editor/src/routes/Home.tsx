import { useEffect, useState } from "react";
import { Select } from "../components/select/Select";

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
	return (
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
	)
}