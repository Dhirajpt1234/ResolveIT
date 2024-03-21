import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/welcome/WelcomePage";
import AboutUsPage from "./pages/about/about";
import UserDashBoardPage from "./pages/UserDashboard/UserDashboardPage";
import { useState, createContext } from "react";
import ContactUsPage from "./pages/contactUs/contactUs";
import RaiseComplaintPage from "./pages/raiseComplaint/raiseComplaint";

export const UserContext = createContext(null);
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage></WelcomePage>,
  },
  {
    path: "/dashboard",
    element: <UserDashBoardPage></UserDashBoardPage>,
  },
  {
    path: "/dashboard/raise-complaint",
    element: <RaiseComplaintPage></RaiseComplaintPage>,
  },
  {
    path: "/about",
    element: <AboutUsPage></AboutUsPage>,
  },
  {
    path: "/contact",
    element: <ContactUsPage></ContactUsPage>,
  },
]);

function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router}>
        <div className="w-7xl m-auto">
          <WelcomePage></WelcomePage>
        </div>
      </RouterProvider>
    </UserContext.Provider>
  );
}

export default App;
