import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDAwMGIwZTI0M2M4NjM5N2RlOTc4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDcxODc1MywiZXhwIjoxNjQ0OTc3OTUzfQ.yqhkA2FK2OYLM-obJJF96Q6QEsFiL8fPAb5r8zgNXME";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});