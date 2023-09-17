import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage, AttendanceCompletionPage } from "./pages";

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
		path: "/attendance/completion",
		element: <AttendanceCompletionPage />,
	},
]);

export default router;
