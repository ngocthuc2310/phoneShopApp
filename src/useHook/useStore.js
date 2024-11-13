import { useEffect, useState } from "react";

//======== phần custom hook useStore thay cho redux ============================
//=== Mình đã kiểm chứng kết quả render thì hiệu quả không thua Redux ==========
let globalState = {};
let action = {};
let listCallback = [];
let listState = [];
let listSetState = [];

export function useStore(callback) {
  const [state, setState] = useState(selectState());

  function selectState() {
    return callback && callback(globalState);
  }

  function dispath(actionIden, payload) {
    const newState = action[actionIden](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (let i = 0; i < listSetState.length; i++) {
      if (
        JSON.stringify(listState[i]) !==
        JSON.stringify(listCallback[i](globalState))
      ) {
        listSetState[i](listCallback[i](globalState));
      }
    }
  }

  useEffect(() => {
    if (callback) {
      listCallback.push(callback);
      listSetState.push(setState);
    }
  }, []);

  useEffect(() => {
    if (callback) listState.push(state);
    return () => {
      listState = [];
    };
  });

  return { selectState: selectState(), dispath };
}

export function Dispath(actionIden, payload) {
  const newState = action[actionIden](globalState, payload);
  globalState = { ...globalState, ...newState };
  for (let i = 0; i < listSetState.length; i++) {
    if (
      JSON.stringify(listState[i]) !==
      JSON.stringify(listCallback[i](globalState))
    ) {
      listSetState[i](listCallback[i](globalState));
    }
  }
}

export function InitStore(inialState, userAction) {
  globalState = { ...globalState, ...inialState };
  action = { ...action, ...userAction };
}
