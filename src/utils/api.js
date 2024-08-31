/** @format */

import axios from "axios";

const api = (() => {
  const baseUrl = "https://vze-garuda-api.vercel.app";
  // const baseUrl = "http://localhost:8000";

  //AUTH
  async function Login(username, password) {
    const url = baseUrl + "/auth/login";
    const data = {
      username,
      password,
    };

    const response = await axios.post(url, data);
    return response;
  }

  async function Refresh() {
    const url = baseUrl + "/auth/refresh";

    try {
      const response = await axios.get(url, {
        credentials: "include",
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async function Logout() {
    const url = baseUrl + "/auth/logout";

    const response = await axios.get(url);

    return response;
  }

  async function GetUsers() {
    const url = baseUrl + `/auth/list`;
    const response = await axios.get(url);
    return response;
  }

  async function CreateUser(payload) {
    const url = baseUrl + "/auth/register";
    const data_register = {
      username: payload.username,
      display_name: payload.displayName,
      password: payload.password,
      role: payload.role,
    };
    const response = await axios.post(url, data_register);
    return response;
  }

  async function EditUser(id, payload) {
    const url = baseUrl + `/auth/adjust/${id}`;
    const data_user = {
      username: payload.username,
      display_name: payload.displayName,
      password: payload.password,
      role: payload.role,
    };
    const response = await axios.put(url, data_user);
    return response;
  }

  async function DeleteUser(id) {
    const url = baseUrl + `/auth/takedown/${id}`;
    const response = await axios.delete(url);
    return response;
  }

  // Confirm
  async function GetConfirmLetter(page) {
    const url = baseUrl + `/confirm/${page}`;
    const response = await axios.get(url);
    return response;
  }

  async function GetConfirmLetterById(id) {
    const url = baseUrl + `/confirm/detail/${id}`;
    const response = await axios.get(url);
    return response;
  }

  async function CreateConfirm(payload) {
    const url = baseUrl + "/confirm";

    const response = await axios.post(url, payload);
    return response;
  }

  async function GetDetailConfirmLetter(id) {
    const url = baseUrl + `/confirm/detail/${id}`;
    const response = await axios.get(url);
    return response;
  }

  async function EditConfirmLetter(id, payload) {
    const url = baseUrl + `/confirm/resubmit/${id}`;
    const response = await axios.put(url, payload);
    return response;
  }

  async function RevisiConfirmLetter(id, payload) {
    const url = baseUrl + `/confirm/revision/${id}`;

    const data = {
      revisi: payload,
    };

    const response = await axios.put(url, data);
    return response;
  }
  async function ApproveCofirmLetter(id) {
    const url = baseUrl + `/confirm/approve/${id}`;

    const response = await axios.put(url, {});
    return response;
  }

  async function UploadFileConfirmLetter(id, payload) {
    const form = new FormData();

    const url = baseUrl + "/utils/upload";

    form.append("type", "confirm");
    form.append("year", payload.year);
    form.append("id_letter", id);
    form.append("file", payload.file || undefined);

    const response = await axios.post(url, form);
    return response;
  }

  // Offering
  async function GetOfferingLetter() {
    const url = baseUrl + `/offer/1`;
    const response = await axios.get(url);
    return response;
  }

  async function CreateOffer(payload) {
    const url = baseUrl + "/offer";

    const response = await axios.post(url, payload);
    return response;
  }

  async function GetDetailOfferingLetter(id) {
    const url = baseUrl + `/offer/detail/${id}`;
    const response = await axios.get(url);
    return response;
  }

  async function ReportPerMonth(year, month) {
    const url = baseUrl + `/report/pm/${year}/${month}`;

    const response = await axios.get(url);
    return response;
  }

  async function EditOfferLetter(id, payload) {
    const url = baseUrl + `/offer/resubmit/${id}`;
    const response = await axios.put(url, payload);
    return response;
  }

  async function RevisiOfferLetter(id, payload) {
    const url = baseUrl + `/offer/revision/${id}`;

    const data = {
      revisi: payload,
    };

    const response = await axios.put(url, data);
    return response;
  }

  async function ApproveOfferLetter(id) {
    const url = baseUrl + `/offer/approve/${id}`;

    const response = await axios.put(url, {});
    return response;
  }

  async function UploadFileOfferLetter(id, payload) {
    const form = new FormData();

    const url = baseUrl + "/utils/upload";

    form.append("type", "offer");
    form.append("year", payload.year);
    form.append("id_letter", id);
    form.append("file", payload.file || undefined);

    const response = await axios.post(url, form);
    return response;
  }

  //Upload Letter
  async function UploadLetter(payload) {
    const form = new FormData();

    const url = baseUrl + "/utils/upload";

    form.append("type", "other");
    form.append("metadata", JSON.stringify(payload));
    form.append("file", payload.file || undefined);

    const response = await axios.post(url, form);
    return response;
  }
  //view upload letter
  async function ViewUploadLetter(id) {
    const url = baseUrl + `/google/open/${id}`;

    const response = await axios.get(url);
    return response;
  }

  async function SendEmailConfirmationLetter(file, address, id) {
    const url = baseUrl + `/confirm/send_email/${id}`;

    const formData = new FormData();
    formData.append("address", address);
    formData.append("file", file, `Confirmation Letter.pdf`);

    const response = await axios.post(url, formData);
    return response;
  }

  return {
    Login,
    Refresh,
    Logout,
    GetUsers,
    CreateUser,
    EditUser,
    DeleteUser,

    GetConfirmLetter,
    GetConfirmLetterById,
    CreateConfirm,
    GetDetailConfirmLetter,
    UploadLetter,
    EditConfirmLetter,
    RevisiConfirmLetter,
    ApproveCofirmLetter,
    UploadFileConfirmLetter,

    GetOfferingLetter,
    CreateOffer,
    GetDetailOfferingLetter,
    EditOfferLetter,
    RevisiOfferLetter,
    ApproveOfferLetter,
    UploadFileOfferLetter,

    ReportPerMonth,
    ViewUploadLetter,

    SendEmailConfirmationLetter,
  };
})();

export default api;
