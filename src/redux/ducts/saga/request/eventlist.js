import axios from "axios";

export function requestGetAccountSettings() {
  return axios.get("http://192.168.1.7:8000/functions/cards");
}
export function requestAddevent(payload) {
  return axios.post("http://192.168.1.7:8000/functions/cards/", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
export function requestEditevent(payload) {
  return axios.put(`http://192.168.1.7:8000/functions/cd/${payload.id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
}
export function requestDeleteEvent(payload) {
  return axios.delete(`http://192.168.1.7:8000/functions/cd/${payload.id}`);
}
