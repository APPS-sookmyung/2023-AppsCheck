import { createBrowserRouter } from "react-router-dom";

import {
	IntroPage,
	LoginPage,
	HomePage,
	AttendanceCompletionPage,
	AdminPage,
	PersonalPage,
	// KakaoCallback,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <IntroPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/home",
		element: <HomePage />,
	},
	// {
	// 	path: "/auth",
	// 	element: <KakaoCallback />,
	// },
	{
		path: "/checkin",
		element: <AttendanceCompletionPage />,
	},
	{
		path: "/administer",
		element: <AdminPage />,
	},
	{
		path: "/personal",
		element: <PersonalPage />,
	},
]);

export default router;
