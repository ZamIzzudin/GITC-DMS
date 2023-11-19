import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/layout'
// import Header from './components/layout/Header'
import Login from './pages/login'
import Home from './pages/home'
import Status from "./pages/status";
import Access from "./pages/access";
import CreateLetter from "./pages/status/create_letter/CreateLetter";

import OfferingLetter from "./components/letter/offering-letter/letter_template/OfferingLetter";
import ConfirmationLetter from "./components/letter/confirmation-letter/letter_template/ConfirmationLetter";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/status" element={<Layout><Status /></Layout>} />
        <Route path="/create/:formattedLetterOption" element={<Layout><CreateLetter /></Layout>} />
        <Route path="/status/offering letter" element={<Layout><OfferingLetter /></Layout>} />
        <Route path="/status/confirmation-letter" element={<Layout><ConfirmationLetter /></Layout>} />
        <Route path="/access" element={<Layout><Access /></Layout>} />
      </Routes>
    </Router >
  )
}

export default AppRouter