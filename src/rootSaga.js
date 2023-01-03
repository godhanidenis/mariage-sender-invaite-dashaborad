import { all, fork, takeLatest } from "redux-saga/effects";
import { ADD_EVENT_LIST_START, DELETE_EVENT_LIST_START, EDIT_EVENT_LIST_START, LOAD_EVENT_LIST_START } from "./redux/ducts/Eventlists";
import { ADD_PEOPLES_LIST_START, DELETE_PEOPLE_LIST_START, EDIT_PEOPLE_LIST_START, LOAD_PEOPLES_LIST_START } from "./redux/ducts/Peoplelist";
import { handleAddeventList, handleDeleteeventList, handleEditeventList, handleGeteventList } from "./redux/ducts/saga/hadndlers/eventlist";
import { handleAddpeopleList, handledeltetepeopleList, handleeditpeopleList, handlegetpeopleList } from "./redux/ducts/saga/hadndlers/peopleList";

function* onGetEventlist() {
  yield takeLatest(LOAD_EVENT_LIST_START, handleGeteventList);
}
function* onGetEventlistAdd() {
  yield takeLatest(ADD_EVENT_LIST_START, handleAddeventList);
}
function* onGetEditEventlistAdd() {
  yield takeLatest(EDIT_EVENT_LIST_START, handleEditeventList);
}
function* onGetdelteEventlistAdd() {
  yield takeLatest(DELETE_EVENT_LIST_START, handleDeleteeventList);
}
function* onGetPeoplelistAdd() {
  yield takeLatest(ADD_PEOPLES_LIST_START, handleAddpeopleList);
}
function* onGetPeoplelist() {
  yield takeLatest(LOAD_PEOPLES_LIST_START, handlegetpeopleList);
}
function* onGetEditPeoplelistAdd() {
  yield takeLatest(EDIT_PEOPLE_LIST_START, handleeditpeopleList);
}
function* onGetdeltePeoplelistAdd() {
  yield takeLatest(DELETE_PEOPLE_LIST_START, handledeltetepeopleList);
}
const usereventListsaga = [fork(onGetEventlist), fork(onGetEventlistAdd),fork(onGetEditEventlistAdd),fork(onGetdelteEventlistAdd)]
const peopleListsaga = [fork(onGetPeoplelistAdd),fork(onGetPeoplelist),fork(onGetEditPeoplelistAdd),fork(onGetdeltePeoplelistAdd)]
export default function* watcherSaga() {
  yield all([
    ...usereventListsaga,
    ...peopleListsaga,
  ]);
}