/** @format */

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AsyncSendEmail } from "../../../../state/confirm/middleware";

import { convertToPDF } from "../../../../components/tools/convertToPDF";
import api from "../../../../utils/api";
import ModalSendEmail from "../../../../components/modal/send_email/ModalSendEmail";

import ConfirmationLetter from "../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter";

const ViewConfirmationLetter = () => {
  const { auth = {} } = useSelector((states) => states);

  const dispatch = useDispatch();
  const pagesRef = useRef([]);
  const { id } = useParams();
  const [dataCL, setDataCL] = useState({});
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    async function getData(id) {
      try {
        const response = await api.GetDetailConfirmLetter(id);
        setDataCL(response.data.data);
      } catch (error) {
        console.error("Kesalahan mengambil data:", error);
      }
    }
    getData(id);
  }, [id]);

  const handleDownloadClick = async () => {
    const pages = pagesRef.current.filter(
      (pageRef) => pageRef.current !== null
    );

    if (pages && pages.length > 0) {
      await convertToPDF(pages, "confirmationLetter", "download");
    }
  };

  const handleSendEmailClick = async (address) => {
    const pages = pagesRef.current.filter(
      (pageRef) => pageRef.current !== null
    );

    if (pages && pages.length > 0) {
      const blob = await convertToPDF(pages, "confirmationLetter", "blob");
      setModalShown(false);
      dispatch(AsyncSendEmail(blob, address, id));
    }
  };

  return (
    <div style={{ paddingBottom: "50px" }}>
      <div className="label-wrapper">
        <div className={`container label`}>
          <span>
            {dataCL.nomor_surat === "unset"
              ? "Confirmation Letter"
              : dataCL.nomor_surat}
          </span>
          <div className="toggle-wrapper">
            {(auth.role === "Sysadmin" || auth.role === "Admin") && (
              <i
                className={`pi pi-envelope download`}
                style={{ fontSize: "1rem", cursor: "pointer" }}
                onClick={() => {
                  setModalShown(true);
                }}
              />
            )}
            <i
              className={`pi pi-download download`}
              style={{ fontSize: "1rem", cursor: "pointer" }}
              onClick={handleDownloadClick}
            />
          </div>
        </div>
      </div>
      <div className="container">
        {Object.keys(dataCL).length !== 0 ? (
          <ConfirmationLetter data={dataCL} pagesRef={pagesRef} />
        ) : null}
      </div>
      <ModalSendEmail
        show={modalShown}
        setShow={setModalShown}
        getData={handleSendEmailClick}
      />
    </div>
  );
};

export default ViewConfirmationLetter;
