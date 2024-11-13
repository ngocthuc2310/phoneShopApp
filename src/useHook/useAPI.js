import { useState } from "react";

//========= custom hook giao tiếp API =====================================
export function useAPI() {
  const [data, setdata] = useState(null);
  function run(url) {
    fetch(url)
      .then((Res) => {
        return Res.json();
      })
      .then((da) => {
        setdata(da);
      })
      .catch((err) => {
        alert(err);
      });
  }
  return [data, run];
}
