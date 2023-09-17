import { createBrowserRouter } from "react-router-dom";

import { HomePage, LoginPage, SignUpPage, AttendanceCompletionPage, AdminPage } from "./pages";

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
	{
		path: "/administer",
		element: <AdminPage />,
	}
]);

export default router;
