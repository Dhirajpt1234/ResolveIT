import "./App.css";

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

function App() {
  const [user,setUser] = useState();
  return (
      <UserContext.Provider value={{user,setUser}}>
        <RouterProvider router={router}>
            <div >
              <WelcomePage></WelcomePage>
            </div>
        </RouterProvider>
      </UserContext.Provider>

  );
}

export default App;
