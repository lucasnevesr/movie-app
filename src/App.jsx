 
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
  } from "react-router-dom";
import Home from "../src/Home/Home"
import MoviesDetails from "./MoviesDetails/MoviesDetails";


function App() {

  return (
    <Router>
        <Routes>
        
            <Route path="/" element={<Home />} /> 
            <Route path="/:id" element={<MoviesDetails />} />
       
        </Routes>
    </Router>
  )
}

export default App