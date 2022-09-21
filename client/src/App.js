import './App.css'
import Home from './Pages/Home/Home.jsx'
import ContactUs from './Pages/Contact_Us/Contact_Us.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Hospitals from './components/hospitals/Hospitals'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>
          <Route exact path="/hospitals" element={<Hospitals/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App