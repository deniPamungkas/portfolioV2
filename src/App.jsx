import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./navbar/navbar.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Blog from "./pages/blog.jsx";
import Home from "./pages/home.jsx";
import Footer from "./footer/footer.jsx";
import DetailProject from "./pages/detailProject.jsx";

function App() {
  return (
    <main className="main bg-white dark:bg-gray-800 relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/blog" Component={Blog} />
          <Route path="/projects" Component={Projects} />
          <Route path="/project-detail" Component={DetailProject} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
