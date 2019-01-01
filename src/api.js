import axios from "axios";

const debounce = (fn, ms = 500) => {
  let timer = 0;
  return param => {
    if (timer > 0) clearTimeout(timer);
    timer = setTimeout(() => fn(param), ms);
  };
};

const _pushState = async state => {
  const res = await axios.post("api/", state);
  console.log(res.statusText, res.data);
  return res.data;
};

export const pushState = debounce(_pushState);

export const pullState = async () => {
  const ts = Math.floor(new Date().getTime() / 1000);
  return axios.get(`api/?timestamp=${ts}`).then(res => res.data);
};
