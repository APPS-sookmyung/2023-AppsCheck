import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";

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
]);

export default router;
