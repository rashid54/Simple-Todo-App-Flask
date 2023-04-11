import { Outlet } from "react-router-dom"
import { CustomNavbar } from "../components/navbar/Navbar"

export const Root = () => {
	return (
		<div className="vh-100 w-100" style={{ backgroundColor: "#D3D3D3" }}>
			<CustomNavbar />
			<Outlet />
		</div>
	);
}