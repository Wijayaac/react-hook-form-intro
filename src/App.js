import "./App.css"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AddStudent from "./pages/Student/AddStudent"
import Error from "./pages/Error"

function App () {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
