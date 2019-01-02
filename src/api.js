import axios from "axios";

const debounce = (fn, ms = 500) => {
  let timer = 0;
  return param => {
    if (timer > 0) clearTimeout(timer);
    return new Promise(res => {
      timer = setTimeout(() => {
        let ret = fn(param);
        res(ret);
      }, ms);
    });
  };
};

const _pushState = async state => {
  console.log("_pushState", state);
  const res = await axios.post("api/", state).catch(console.error);
  console.log(res.statusText, res.data);
  if (res.status === 200) {
    /*
    Toast.open({
      message: "更新しました✅",
      queue: false
    });
    */
  }
  return res;
};

export const pushState = debounce(_pushState);

export const pullState = async () => {
  const ts = Math.floor(new Date().getTime() / 1000);
  return axios.get(`api/?timestamp=${ts}`).then(res => res.data);
};
