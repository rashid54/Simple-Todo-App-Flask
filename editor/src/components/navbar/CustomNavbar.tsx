import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CustomNavbar = () => {
	return (
		<Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="w-100">
					<Link className="nav-item nav-link ms-3" id="home" to="/">Home</Link>
					<Link className="nav-item nav-link ms-3" id="home" to="/tabs/home">TabsDemo</Link>
					<a className="nav-item nav-link me-3 ms-auto" id="logout" href="/logout">Logout</a>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}