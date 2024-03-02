import "./App.css";
<<<<<<< HEAD

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import AboutUsPage from "./pages/AboutPage";
import UserDashBoardPage from "./pages/UserDashboardPage";
import { useState,createContext} from 'react';

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
    path: '/about',
    element: (<AboutUsPage></AboutUsPage>),
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
            <div >
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
