import { createBrowserRouter } from "react-router-dom";

import {
	HomePage,
	IntroPage,
	AttendanceCompletionPage,
	AdminPage,
	PersonalPage,
	KakaoCallback,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/home",
		element: <HomePage />,
	},
	{
		path: "/",
		element: <IntroPage />,
	},
	{
		path: "/auth",
		element: <KakaoCallback />,
	},
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
