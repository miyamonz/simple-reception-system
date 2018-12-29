import axios from "axios";
export const pushState = async state => {
  const res = await axios.post("/api/", state);
  console.log(res.statusText, res.data);
  return res.data;
};
export const pullState = async () => {
  const ts = Math.floor(new Date().getTime() / 1000);
  return axios.get(`/api/?timestamp=${ts}`).then(res => res.data);
};
