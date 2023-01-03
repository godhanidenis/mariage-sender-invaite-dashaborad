import { call, put } from "redux-saga/effects";
import { addPeopleslistError, addPeopleslistSuccess, deletePeoplelistError, deletePeoplelistSuccess, editPeoplelistError, editPeoplelistSuccess, loadPeoplelistError, loadPeoplelistSuccess } from "../../Peoplelist";
import { requestAddpeople, requestdeletepeople, requesteditpeople, requestgetpeople } from "../request/peopleList";


export function* handleAddpeopleList({ paylaod }) {
    try {
      const response = yield call(requestAddpeople, paylaod);
      console.log("HandleGetAccountSettings Response:", response?.data);
  
      if (response.status === 200) {
        yield put(addPeopleslistSuccess(response?.data));
      }
    } catch (error) {
      yield put(addPeopleslistError(error));
    }
  }

  export function* handlegetpeopleList({ paylaod }) {
    try {
      const response = yield call(requestgetpeople, paylaod);
      console.log("HandleGetAccountSettings Response:", response?.data);
  
      if (response.status === 200) {
        yield put(loadPeoplelistSuccess(response?.data));
      }
    } catch (error) {
      yield put(loadPeoplelistError(error));
    }
  }

  export function* handleeditpeopleList({ paylaod }) {
    console.log("----",paylaod)
    try {
      const response = yield call(requesteditpeople, paylaod);
      console.log("HandleGetAccountSettings Response:", response?.data);
  
      if (response.status === 200) {
        yield put(editPeoplelistSuccess(response?.data));
      }
    } catch (error) {
      yield put(editPeoplelistError(error));
    }
  }

  export function* handledeltetepeopleList({ paylaod }) {
    console.log(paylaod,"---payload delete action")
    try {
      const response = yield call(requestdeletepeople, paylaod);
      console.log(response,"---response")
      const response1 = yield call(requestgetpeople, paylaod);
      console.log("HandleGetAccountSettings Response:", response1?.data);
  
      if (response.status === 200) {
        yield put(loadPeoplelistSuccess(response?.data));
      }
    } catch (error) {
      yield put(deletePeoplelistError(error));
    }
  }