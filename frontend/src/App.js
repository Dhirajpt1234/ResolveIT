import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComplaintGeneration from "./pages/complaintGeneration/ComplaintGeneration";
import ComplaintForm from "./components/complaintForm";
import Navbar from "./components/navbar";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/complaintgeneration" element={<ComplaintGeneration />} />
    //   </Routes>
    // </BrowserRouter>

    <div>
      <ComplaintGeneration />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
