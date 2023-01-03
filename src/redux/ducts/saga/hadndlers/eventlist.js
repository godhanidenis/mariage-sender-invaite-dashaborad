import { call, put } from "redux-saga/effects";
import { addEventlistError, addEventlistSuccess, editEventlistError, editEventlistSuccess, loadEventlistError, loadEventlistSuccess } from "../../Eventlists";
import { requestAddevent, requestDeleteEvent, requestEditevent, requestGetAccountSettings } from "../request/eventlist";

export function* handleGeteventList() {
  try {
    const response = yield call(requestGetAccountSettings);
    console.log("HandleGetAccountSettings Response:", response?.data);

    if (response.status === 200) {
      yield put(loadEventlistSuccess(response?.data));
    }
  } catch (error) {
    yield put(loadEventlistError(error));
  }
}
export function* handleAddeventList({ paylaod }) {
  console.log("payload---", paylaod)
  try {
    const response = yield call(requestAddevent, paylaod);
    console.log("HandleGetAccountSettings Response:", response?.data);

    if (response.status === 200) {
      yield put(addEventlistSuccess(response?.data));
    }
  } catch (error) {
    yield put(addEventlistError(error));
  }
}
export function* handleEditeventList({ paylaod }) {
  try {
    const response = yield call(requestEditevent, paylaod);
    console.log("HandleGetAccountSettings Response:", response?.data);

    if (response.status === 200) {
      yield put(editEventlistSuccess(response?.data));
    }
  } catch (error) {
    yield put(editEventlistError(error));
  }
}
export function* handleDeleteeventList({ paylaod }) {
  try {
    const response = yield call(requestDeleteEvent, paylaod);

    if (response.status === 200) {
      // yield put(editEventlistSuccess(response?.data));
    }
  } catch (error) {
    yield put(editEventlistError(error));
  }
}