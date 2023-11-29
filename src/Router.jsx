import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/layout'
// import Header from './components/layout/Header'
import Login from './pages/login'
import Home from './pages/home'
import Status from "./pages/status";
import Access from "./pages/access";
import CreateConfirmationLetter from "./pages/status/create_letter/create_confirmationLetter/CreateConfirmationLetter";
import CreateOfferingLetter from "./pages/status/create_letter/create_offeringLetter/CreateOfferingLetter";
import ViewConfirmationLetter from "./pages/status/view_letter/view_confirmationLetter/ViewConfirmationLetter";
import ViewOfferingLetter from "./pages/status/view_letter/view_offeringLetter/ViewOfferingLetter";

import EditOfferingLetter from "./pages/status/revision_letter/revision_offeringLetter/EditOfferingLetter";
import EditConfirmationLetter from "./pages/status/revision_letter/revision_confirmationLetter/EditConfirmationLetter";

import OfferingLetter from "./components/letter/offering-letter/letter_template/OfferingLetter";
import ConfirmationLetter from "./components/letter/confirmation-letter/letter_template/ConfirmationLetter";

import Loading from "./pages/test"

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/test" element={<Loading />} />
        <Route path="/status" element={<Layout><Status /></Layout>} />
        {/* <Route path="/status/:typeLetterData" element={<Layout><Status /></Layout>} /> */}
        <Route path="/create/confirmation-letter" element={<Layout><CreateConfirmationLetter /></Layout>} />
        <Route path="/create/offering-letter" element={<Layout><CreateOfferingLetter /></Layout>} />

        <Route path="/view/confirmation-letter/:id" element={<Layout><ViewConfirmationLetter /></Layout>} />
        <Route path="/view/offering-letter/:id" element={<Layout><ViewOfferingLetter /></Layout>} />


        <Route path="/edit/confirmation-letter/:id" element={<Layout><EditConfirmationLetter /></Layout>} />
        <Route path="/edit/offering-letter/:id" element={<Layout><EditOfferingLetter /></Layout>} />

        {/* <Route path="/status/offering-letter" element={<Layout><OfferingLetter /></Layout>} />
        <Route path="/status/confirmation-letter" element={<Layout><ConfirmationLetter /></Layout>} /> */}
        <Route path="/access" element={<Layout><Access /></Layout>} />
      </Routes>
    </Router >
  )
}

export default AppRouter