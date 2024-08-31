/** @format */

import { GetOffersAction } from "./action";
import api from "../../utils/api";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { showLoading, hideLoading } from "react-redux-loading-bar";

function AsyncGetOfferings(page = 1) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await api.GetOfferingLetter(page);
      dispatch(GetOffersAction(response.data.data));
    } catch (err) {
      console.error(err);
      dispatch(GetOffersAction([]));
    }
    dispatch(hideLoading());
  };
}

function AsyncCreateLetter(payload) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await api.CreateOffer(payload);

      if (response.status !== 202) {
        throw new Error();
      } else {
        Swal.fire({
          icon: "success",
          title: "Add Success",
          showConfirmButton: false,
          timer: 3000,
        });

        const data = await api.GetConfirmLetter(1);
        dispatch(GetOffersAction(data.data.data));
        window.location.assign("/status");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    dispatch(hideLoading());
  };
}

function AsyncUploadLetter(payload) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await api.UploadLetter(payload);

      if (response.info !== undefined) {
        throw new Error();
      } else {
        Swal.fire({
          icon: "success",
          title: "Upload Success",
          showConfirmButton: false,
          timer: 3000,
        });

        const data = await api.GetConfirmLetter(1);
        dispatch(GetOffersAction(data.data.data));
        window.location.assign("/status");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Upload Gagal",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    dispatch(hideLoading());
  };
}
function AsyncEditLetter(id = null, payload) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await api.EditOfferLetter(id, payload);

      if (response.info !== undefined) {
        throw new Error();
      } else {
        Swal.fire({
          icon: "success",
          title: "Update Success",
          showConfirmButton: false,
          timer: 3000,
        });

        const data = await api.GetConfirmLetter(1);
        dispatch(GetOffersAction(data.data.data));
        window.location.assign("/status");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Update Gagal",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    dispatch(hideLoading());
  };
}

function AsyncRevisiLetter(id = null, paylaod) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await api.RevisiOfferLetter(id, paylaod);

      if (response.info !== undefined) {
        throw new Error();
      } else {
        Swal.fire({
          icon: "success",
          title: "Success added revision",
          showConfirmButton: false,
          timer: 3000,
        });

        const data = await api.GetConfirmLetter(1);
        dispatch(GetOffersAction(data.data.data));
        window.location.assign("/status");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Revision Input Failed",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    dispatch(hideLoading());
  };
}

function AsyncApproveLetter(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await api.ApproveOfferLetter(id);

      if (response.info !== undefined) {
        throw new Error();
      } else {
        Swal.fire({
          icon: "success",
          title: "Success Approve Letter",
          showConfirmButton: false,
          timer: 3000,
        });

        const data = await api.GetConfirmLetter(1);
        dispatch(GetOffersAction(data.data.data));
        window.location.assign("/status");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Approve Letter Failed",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    dispatch(hideLoading());
  };
}
function AsyncUploadFileOfferLetter(id = null, payload) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await api.UploadFileOfferLetter(id, payload);

      if (response.info !== undefined) {
        throw new Error();
      } else {
        Swal.fire({
          icon: "success",
          title: "Upload File Success",
          showConfirmButton: false,
          timer: 3000,
        });

        const data = await api.GetConfirmLetter(1);
        dispatch(GetOffersAction(data.data.data));
        window.location.assign("/status");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Upload File Failed",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    dispatch(hideLoading());
  };
}

export {
  AsyncGetOfferings,
  AsyncCreateLetter,
  AsyncUploadLetter,
  AsyncEditLetter,
  AsyncRevisiLetter,
  AsyncApproveLetter,
  AsyncUploadFileOfferLetter,
};
