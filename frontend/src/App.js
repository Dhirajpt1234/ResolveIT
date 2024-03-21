import "./App.css";
<<<<<<< HEAD

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import AboutUsPage from "./pages/AboutPage";
import UserDashBoardPage from "./pages/UserDashboardPage";
import { useState,createContext} from 'react';
import ContactUsPage from "./pages/ContactUsPage";
import RaiseComplaintPage from "./pages/RaiseComplaintPage"

export const UserContext = createContext(null);
const router = createBrowserRouter([
  {
    path: '/',
    element: (<WelcomePage></WelcomePage>),
  },
  {
    path: '/dashboard',
    element: (<UserDashBoardPage></UserDashBoardPage>),
  },
  {
    path: '/dashboard/raise-complaint',
    element: (<RaiseComplaintPage></RaiseComplaintPage>),
  },
  {
    path: '/about',
    element: (<AboutUsPage></AboutUsPage>),
  },
  {
    path: '/contact',
    element: (<ContactUsPage></ContactUsPage>),
  },
])
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComplaintGeneration from "./pages/complaintGeneration/ComplaintGeneration";
import ComplaintForm from "./components/complaintForm";
import Navbar from "./components/navbar";
import ProjectGenerationPage from "./pages/projectGeneration/projectGenerationPage";
import AdminDashboard from "./pages/adminDashboard/adminDashboard";
import UserDashBoard from "./pages/UserDashBoard";
>>>>>>> a76ae0b9 (added project card)

function App() {
  const [user,setUser] = useState();
  return (
<<<<<<< HEAD
      <UserContext.Provider value={{user,setUser}}>
        <RouterProvider router={router}>
            <div className="w-7xl m-auto">
              <WelcomePage></WelcomePage>
            </div>
        </RouterProvider>
      </UserContext.Provider>

=======
    <div className="container m-auto">
      <AdminDashboard />
      {/* <UserDashBoard /> */}
    </div>
>>>>>>> a76ae0b9 (added project card)
  );
}

export default App;
