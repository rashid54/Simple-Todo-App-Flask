import { Outlet } from "react-router-dom"
import { CustomNavbar } from "../components/navbar/CustomNavbar"

export const Root = () => {
	return (
		<>
			<CustomNavbar />
			<Outlet />
		</>
	);
}