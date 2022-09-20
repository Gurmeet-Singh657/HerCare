import './App.css'
import Home from './Pages/Home/Home.jsx'
import ContactUs from './Pages/Contact_Us/Contact_Us.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App