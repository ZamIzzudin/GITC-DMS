import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import { AsyncRefreshToken, AsyncCheckLogin, AsyncLogout } from './state/auth/middleware'
import { useSelector, useDispatch } from 'react-redux'

import Layout from './components/layout'
// import Header from './components/layout/Header'
import Login from './pages/login'
import Home from './pages/home'
import Status from "./pages/status";
import Access from "./pages/access";
import UploadConfirmationLetter from "./pages/status/upload_letter/Upload_ConfirmationLetter/UploadConfirmationLetter";
import UploadOfferingLetter from "./pages/status/upload_letter/Upload_OfferingLetter/UploadOfferingLetter";
import CreateConfirmationLetter from "./pages/status/create_letter/create_confirmationLetter/CreateConfirmationLetter";
import CreateOfferingLetter from "./pages/status/create_letter/create_offeringLetter/CreateOfferingLetter";
import ViewConfirmationLetter from "./pages/status/view_letter/view_confirmationLetter/ViewConfirmationLetter";
import ViewOfferingLetter from "./pages/status/view_letter/view_offeringLetter/ViewOfferingLetter";
import ViewUploadFile from "./pages/status/view_letter/view_uploadFile/ViewUploadFile";
import EditOfferingLetter from "./pages/status/revision_letter/revision_offeringLetter/EditOfferingLetter";
import EditConfirmationLetter from "./pages/status/revision_letter/revision_confirmationLetter/EditConfirmationLetter";

// import OfferingLetter from "./components/letter/offering-letter/letter_template/OfferingLetter";
import ConfirmationLetter from "./components/letter/confirmation-letter/letter_template/ConfirmationLetter";

import Loading from "./pages/test"

function AppRouter() {
  const { auth = {} } = useSelector(states => states)
  const dispatch = useDispatch()

  // Refresh Token Cycle
  useEffect(() => {
    // do refresh token where token is'nt undefined
    if (auth.token !== undefined) {
      try {
        // Do in 8 minutes
        const interval = setInterval(() => {
          dispatch(AsyncRefreshToken())
        }, 480000);

        return () => clearInterval(interval);
      } catch (err) {
        dispatch(AsyncLogout())
      }
    } else {
      // Try Tto get token from Session Storage
      try {
        dispatch(AsyncCheckLogin())
      } catch (err) {
        dispatch(AsyncLogout())
      }
    }
  }, [auth, dispatch])

  return (
    <Router>
      {auth?.token === undefined ? (
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Loading />} />
            <Route path="/status" element={<Status />} />
            {/* <Route path="/status/:typeLetterData" element={<Layout><Status /></Layout>} /> */}
            <Route path="/upload/confirmation-letter" element={<UploadConfirmationLetter />} />
            <Route path="/upload/offering-letter" element={<UploadOfferingLetter />} />

            <Route path="/create/confirmation-letter" element={<CreateConfirmationLetter />} />
            <Route path="/create/offering-letter" element={<CreateOfferingLetter />} />

            <Route path="/view/confirmation-letter/:id" element={<ViewConfirmationLetter />} />
            <Route path="/view/offering-letter/:id" element={<ViewOfferingLetter />} />

            <Route path="/edit/confirmation-letter/:id" element={<EditConfirmationLetter />} />
            <Route path="/edit/offering-letter/:id" element={<EditOfferingLetter />} />

            <Route path="/view/upload-dokumen/:id" element={<ViewUploadFile />} />

            <Route path="/view/CL" element={<ConfirmationLetter />} />
            {/* <Route path="/status/offering-letter" element={<Layout><OfferingLetter /></Layout>} />
        <Route path="/status/confirmation-letter" element={<Layout><ConfirmationLetter /></Layout>} /> */}
            <Route path="/access" element={<Access />} />
          </Routes>
        </Layout>

      )}

    </Router >
  )
}

export default AppRouter