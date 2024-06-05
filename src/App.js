import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favourite from "./components/Favourite";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
