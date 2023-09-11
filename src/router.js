import { createBrowserRouter } from "react-router-dom";
import { AdminPage, HomePage, LoginPage, SignUpPage } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignUpPage />,
	},

	{
		path: "/administer",
		element: <AdminPage />,
	}
]);

export default router;
