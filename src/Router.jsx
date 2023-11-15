import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/layout'
// import Header from './components/layout/Header'
import Login from './pages/login'
import Home from './pages/home'
import Status from "./pages/status";
import Access from "./pages/access";
import CreateLetter from "./components/letter/createLetter/CreateLetter";
import Letter from "./components/letter/letter/Letter";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/status" element={<Layout><Status /></Layout>} />
        <Route path="/status/create-letter" element={<Layout><CreateLetter /></Layout>} />
        <Route path="/status/letter" element={<Layout><Letter /></Layout>} />
        <Route path="/access" element={<Layout><Access /></Layout>} />
      </Routes>
    </Router >
  )
}

export default AppRouter