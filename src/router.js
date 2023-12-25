import { createBrowserRouter } from "react-router-dom";

import {
  HomePage,
  LoginPage,
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
    element: <LoginPage />,
  },
  {
    path: "/auth",
    element: <KakaoCallback />,
  },
  {
    path: "/checkfin",
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
