import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
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
					<div className="navbar-nav w-100 d-flex ">
						<Link className="nav-item nav-link mx-3" id="home" to="/">Home</Link>
						<Link className="nav-item nav-link mx-3" id="home" to="/Tabs">Tabs</Link>
						<a className="nav-item nav-link" style={{ marginRight: "1rem", marginLeft: "auto"}} id="logout" href="/logout">Logout</a>
					</div>
				</div>
			</nav>
		</div>
	);
}