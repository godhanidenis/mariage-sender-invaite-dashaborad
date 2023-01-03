export const LOAD_PEOPLES_LIST_START = "LOAD_PEOPLES_LIST_START";
export const LOAD_PEOPLES_LIST_SUCCESS = "LOAD_PEOPLES_LIST_SUCCESS";
export const LOAD_PEOPLES_LIST_ERROR = "LOAD_PEOPLES_LIST_ERROR";

export const ADD_PEOPLES_LIST_START = "ADD_PEOPLES_LIST_START";
export const ADD_PEOPLES_LIST_SUCCESS = "ADD_PEOPLES_LIST_SUCCESS";
export const ADD_PEOPLES_LIST_ERROR = "ADD_PEOPLES_LIST_ERROR";

export const EDIT_PEOPLE_LIST_START = "EDIT_PEOPLE_LIST_START";
export const EDIT_PEOPLE_LIST_SUCCESS = "EDIT_PEOPLE_LIST_SUCCESS";
export const EDIT_PEOPLE_LIST_ERROR = "EDIT_PEOPLE_LIST_ERROR";

export const DELETE_PEOPLE_LIST_START = "DELETE_PEOPLE_LIST_START";
export const DELETE_PEOPLE_LIST_SUCCESS = "DELETE_PEOPLE_LIST_SUCCESS";
export const DELETE_PEOPLE_LIST_ERROR = "DELETE_PEOPLE_LIST_ERROR";

export const deletePeoplelistStart = (addevent) => (
  console.log(addevent, "WWW"),
  {
    type: DELETE_PEOPLE_LIST_START,
    paylaod: addevent
  });

export const deletePeoplelistSuccess = (addevent) => ({
  type: DELETE_PEOPLE_LIST_SUCCESS,
  payload: addevent,
});

export const deletePeoplelistError = (error) => ({
  type: DELETE_PEOPLE_LIST_ERROR,
  payload: error,
});

export const editPeoplelistStart = (addevent) => (
  console.log(addevent, "WWW"),
  {
    type: EDIT_PEOPLE_LIST_START,
    paylaod: addevent
  });

export const editPeoplelistSuccess = (addevent) => ({
  type: EDIT_PEOPLE_LIST_SUCCESS,
  payload: addevent,
});

export const editPeoplelistError = (error) => ({
  type: EDIT_PEOPLE_LIST_ERROR,
  payload: error,
});



export const addPeopleslistStart = (addevent) => (
  {
    type: ADD_PEOPLES_LIST_START,
    paylaod: addevent
  });

export const addPeopleslistSuccess = (addevent) => ({
  type: ADD_PEOPLES_LIST_SUCCESS,
  payload: addevent,
});

export const addPeopleslistError = (error) => ({
  type: ADD_PEOPLES_LIST_ERROR,
  payload: error,
});


export const loadPeoplelistStart = () => ({
  type: LOAD_PEOPLES_LIST_START,
});

export const loadPeoplelistSuccess = (eventList) => ({
  type: LOAD_PEOPLES_LIST_SUCCESS,
  payload: eventList,
});

export const loadPeoplelistError = (error) => ({
  type: LOAD_PEOPLES_LIST_ERROR,
  payload: error,
});

const initialState = {
  peopleList: {},
  loading: false,
  error: "",
};

const peopleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PEOPLES_LIST_START:
      return {
        ...state,
        loading: true,
      };

    case LOAD_PEOPLES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        peopleList: action?.payload,
      };
    case LOAD_PEOPLES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_PEOPLES_LIST_START:
      return {
        ...state,
        loading: true,
      };

    case ADD_PEOPLES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        peopleList: [...state.peopleList.concat(action?.payload)]
        // peopleList: action?.payload
      };
    case ADD_PEOPLES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EDIT_PEOPLE_LIST_START:
      return {
        ...state,
        loading: true,
      };

    case EDIT_PEOPLE_LIST_SUCCESS:
      console.log('...', action.payload);
      const index = state.peopleList.findIndex((user) => user.id === action.payload.id);
      console.log('idx', index);

      const newArray = [...state.peopleList];
      
      newArray[index] = action.payload;
      return {
        ...state,
        loading: false,
        peopleList: newArray,
      };

    case EDIT_PEOPLE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_PEOPLES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PEOPLE_LIST_START:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PEOPLE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        eventList: [...state,state.peopleList.filter(item => item.id !== action.id)]
      };
    case DELETE_PEOPLE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default peopleListReducer