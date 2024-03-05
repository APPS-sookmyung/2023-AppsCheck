import { createBrowserRouter } from "react-router-dom";

import {
	IntroPage,
	LoginPage,
	SignupPage,
	HomePage,
	AttendanceCompletionPage,
	AdminPage,
	PersonalPage,
	ProfilePage,
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
		path: "/signup",
		element: <SignupPage />,
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
	{
		path: "/profile",
		element: <ProfilePage />,
	},
]);

export default router;
