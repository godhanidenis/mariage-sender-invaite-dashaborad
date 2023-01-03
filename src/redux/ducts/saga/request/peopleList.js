import axios from "axios";
export function requestAddpeople(payload) {
    return axios.post("http://192.168.1.7:8000/functions/people/", payload);
  }
  export function requestgetpeople() {
    return axios.get("http://192.168.1.7:8000/functions/people/");
  }
  export function requesteditpeople(payload) {
    return axios.put(`http://192.168.1.7:8000/functions/people/${payload.id}`,payload.data,);
  }
  export function requestdeletepeople(payload) {
    return axios.delete(`http://192.168.1.7:8000/functions/people/${payload.id}`);
  }