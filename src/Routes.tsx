import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";

export function AppRoutes(){
	return(
    <Router>
      <Routes>
        <Route path="/MangaMirror-web/" element={<Home />} />
      </Routes>
    </Router>
  )
}