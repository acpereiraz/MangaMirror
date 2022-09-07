import MangaPage from "components/MangaPage";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Manga } from "types/Manga";
import Home from "./pages/Home";

export function AppRoutes(){

	return(
    <Router>
      <Routes>
        <Route path="/MangaMirror-web/" element={<Home />} >
        <Route path="/MangaMirror-web/m/:id" element={<MangaPage />} />
        </Route>
      </Routes>
    </Router>
  )
}