export const LOAD_EVENT_LIST_START = "LOAD_EVENT_LIST_START";
export const LOAD_EVENT_LIST_SUCCESS = "LOAD_EVENT_LIST_SUCCESS";
export const LOAD_EVENT_LIST_ERROR = "LOAD_EVENT_LIST_ERROR";

export const ADD_EVENT_LIST_START = "ADD_EVENT_LIST_START";
export const ADD_EVENT_LIST_SUCCESS = "ADD_EVENT_LIST_SUCCESS";
export const ADD_EVENT_LIST_ERROR = "ADD_EVENT_LIST_ERROR";

export const EDIT_EVENT_LIST_START = "EDIT_EVENT_LIST_START";
export const EDIT_EVENT_LIST_SUCCESS = "EDIT_EVENT_LIST_SUCCESS";
export const EDIT_EVENT_LIST_ERROR = "EDIT_EVENT_LIST_ERROR";

export const DELETE_EVENT_LIST_START = "DELETE_EVENT_LIST_START";
export const DELETE_EVENT_LIST_SUCCESS = "DELETE_EVENT_LIST_SUCCESS";
export const DELETE_EVENT_LIST_ERROR = "DELETE_EVENT_LIST_ERROR";



export const editEventlistStart = (addevent) => ({
  type: EDIT_EVENT_LIST_START,
  paylaod:addevent
});

export const editEventlistSuccess = (addevent) => ({
  type: EDIT_EVENT_LIST_SUCCESS,
  payload: addevent,
});

export const editEventlistError = (error) => ({
  type: EDIT_EVENT_LIST_ERROR,
  payload: error,
});

export const deleteEventlistStart = (addevent) => ({
  type: DELETE_EVENT_LIST_START,
  paylaod:addevent
});

export const deleteEventlistSuccess = (addevent) => ({
  type: DELETE_EVENT_LIST_SUCCESS,
  payload: addevent,
});

export const deleteEventlistError = (error) => ({
  type: DELETE_EVENT_LIST_ERROR,
  payload: error,
});


export const addEventlistStart = (addevent) => (
  console.log(addevent,"addevent"),
  {
  type: ADD_EVENT_LIST_START,
  paylaod:addevent
});

export const addEventlistSuccess = (addevent) => ({
  type: ADD_EVENT_LIST_SUCCESS,
  payload: addevent,
});

export const addEventlistError = (error) => ({
  type: ADD_EVENT_LIST_ERROR,
  payload: error,
});


export const loadEventlistStart = () => ({
  type: LOAD_EVENT_LIST_START,
});

export const loadEventlistSuccess = (eventList) => ({
  type: LOAD_EVENT_LIST_SUCCESS,
  payload: eventList,
});

export const loadEventlistError = (error) => ({
  type: LOAD_EVENT_LIST_ERROR,
  payload: error,
});

const initialState = {
  eventList: {},
  loading: false,
  error: "",
};

const eventListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EVENT_LIST_START:
      return {
        ...state,
        loading: true,
      };

    case LOAD_EVENT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        eventList: action?.payload,
      };
    case LOAD_EVENT_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case ADD_EVENT_LIST_START:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_EVENT_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          eventList:  [...state.eventList.concat(action?.payload)]
        };
      case ADD_EVENT_LIST_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case EDIT_EVENT_LIST_START:
          return {
            ...state,
            loading: true,
          };
    
        case EDIT_EVENT_LIST_SUCCESS:
          return {
            ...state,
            loading: false,
            eventList:  [...state.eventList.concat(action?.payload)]
          };
        case EDIT_EVENT_LIST_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
          case DELETE_EVENT_LIST_START:
            return {
              ...state,
              loading: true,
            };
      
          case DELETE_EVENT_LIST_SUCCESS:
            return {
              ...state,
              loading: false,
              eventList: [...state,state.eventList.filter(item => item.id !== action.id)]
            };
          case DELETE_EVENT_LIST_ERROR:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
    default:
      return state;
  }
}

export default eventListReducer