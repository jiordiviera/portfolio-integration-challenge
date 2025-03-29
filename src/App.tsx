import Root from "./components/root";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="case-studies" element={<div>Case Studies</div>} />
        <Route path="testimonials" element={<div>Testimonials</div>} />
        <Route path="recent-work" element={<div>Recent Work</div>} />
        <Route path="get-in-touch" element={<div>Get in Touch</div>} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
