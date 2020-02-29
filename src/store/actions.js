import { 
    SET_USERS_API_STATUS, SET_USER_INFO_API_STATUS, SET_USER_REPOS_API_STATUS,
    SET_USERS, SET_USER_INFO, SET_SEARCH_TEXT, SET_USER_REPOS, SET_SHOW_MODAL,
} from './actionTypes';
import { fetchUsersService, fetchUserInfoService, fetchUserReposService } from '../api-service';

export const setUsersApiStatus = (data) => ({
    type: SET_USERS_API_STATUS,
    payload: { data },
});

export const setUserInfoApiStatus = (data) => ({
    type: SET_USER_INFO_API_STATUS,
    payload: { data },
});

export const setUserReposApiStatus = (data) => ({
    type: SET_USER_REPOS_API_STATUS,
    payload: { data },
});

export const setUsers = (data) => ({
    type: SET_USERS,
    payload: { data: data.items },
});

export const setUserInfo = (data) => ({
    type: SET_USER_INFO,
    payload: { data },
});

export const setUserRepos = (data) => ({
    type: SET_USER_REPOS,
    payload: { data },
});

export const setSearchText = (data) => ({
    type: SET_SEARCH_TEXT,
    payload: { data },
});

export const setShowModal = (data) => ({
    type: SET_SHOW_MODAL,
    payload: { data },
});

const fetch = (serviceHandler, statusHandler, defaultValue, ...args) => {
    return (dispatch) => {
        return serviceHandler(dispatch, ...args).then(
            (data) => dispatch(statusHandler(data)),
            (error) => {
                dispatch(statusHandler(defaultValue));
                console.error(error);
            },
        );
    };
}

export const getUsers = () => {
    return fetch(fetchUsersService, setUsers, []);
}

export const fetchUserInfo = (user) => {
    return fetch(fetchUserInfoService, setUserInfo, null, user);
}

export const fetchUserRepos = (user) => {
    return fetch(fetchUserReposService, setUserRepos, [], user);
}