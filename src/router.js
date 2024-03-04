import { createBrowserRouter } from "react-router-dom";
import TabBar from "./components/TabBar";

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
		element: (
			<>
				<IntroPage />
			</>
		),
	},
	{
		path: "/login",
		element: (
			<>
				<LoginPage />
				<TabBar />
			</>
		),
	},
	{
		path: "/signup",
		element: (
			<>
				<SignupPage />
				<TabBar />
			</>
		),
	},
	{
		path: "/home",
		element: (
			<>
				<HomePage />
				<TabBar />
			</>
		),
	},
	// {
	// 	path: "/auth",
	// 	element: <KakaoCallback />,
	// },
	{
		path: "/checkin",
		element: (
			<>
				<AttendanceCompletionPage />
				<TabBar />
			</>
		),
	},
	{
		path: "/administer",
		element: (
			<>
				<AdminPage />
				<TabBar />
			</>
		),
	},
	{
		path: "/personal",
		element: (
			<>
				<PersonalPage />
				<TabBar />
			</>
		),
	},
	{
		path: "/profile",
		element: <ProfilePage />,
	},
]);

export default router;
