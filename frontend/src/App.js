import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComplaintGeneration from "./pages/complaintGeneration/ComplaintGeneration";
import ComplaintForm from "./components/complaintForm";
import Navbar from "./components/navbar";
import ProjectGenerationPage from "./pages/projectGeneration/projectGenerationPage";
import AdminDashboard from "./pages/adminDashboard/adminDashboard";

function App() {
  return (
    <div className="container m-auto">
      <AdminDashboard />
    </div>
  );
}

export default App;
