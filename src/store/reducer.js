import { 
  SET_USERS_API_STATUS, SET_USER_INFO_API_STATUS,
  SET_USERS, SET_USER_INFO, SET_SEARCH_TEXT,
  SET_USER_REPOS_API_STATUS, SET_USER_REPOS,
  SET_SHOW_MODAL,
} from './actionTypes';
import statusCodes from '../api-service/status-codes';

const initialState = {
  users: [],
  usersApiStatus: statusCodes.notUsed,
  userInfo: null,
  userInfoApiStatus: statusCodes.notUsed,
  userReposApiStatus: statusCodes.notUsed,
  userRepos: [],
  searchText: "",
  showModal: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USERS: {
      const { data } = action.payload;
      return {
        ...state,
        users: data,
      };
    }
    case SET_USERS_API_STATUS: {
      const { data } = action.payload;
      return {
        ...state,
        usersApiStatus: data,
      };
    }
    case SET_USER_INFO: {
      const { data } = action.payload;
      return {
        ...state,
        userInfo: data,
      };
    }
    case SET_USER_REPOS: {
      const { data } = action.payload;
      return {
        ...state,
        userRepos: data,
      };
    }
    case SET_USER_INFO_API_STATUS: {
      const { data } = action.payload;
      return {
        ...state,
        userInfoApiStatus: data,
      };
    }
    case SET_USER_REPOS_API_STATUS: {
      const { data } = action.payload;
      return {
        ...state,
        userReposApiStatus: data,
      };
    }
    case SET_SEARCH_TEXT: {
      const { data } = action.payload;
      return {
        ...state,
        searchText: data,
      };
    }
    case SET_SHOW_MODAL: {
      const { data } = action.payload;
      return {
        ...state,
        showModal: data,
      };
    }
    default:
      return state;
  }
}
