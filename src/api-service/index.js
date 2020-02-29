import { USERS_API_URL, USER_INFO_API_URL } from '../config';
import statusCodes from './status-codes';
import { setUsersApiStatus, setUserInfoApiStatus, setUserReposApiStatus } from '../store/actions';
// import { useSelector } from 'react-redux';
// import { getSearchText } from '../store/selectors';
import store from '../store';

const fetchService = async (dispatch, apiUrl, apiStatusHandler) => {
    let result = [];
    try {
        dispatch(apiStatusHandler(statusCodes.requesting));
        result = await fetch(apiUrl).then(response => response.json());
        dispatch(apiStatusHandler(statusCodes.successful));
    } catch(ex) {
        dispatch(apiStatusHandler(statusCodes.failed));
    };
    return result;
}

export async function fetchUsersService(dispatch) {
    const state = store.getState();
    const text = state.searchText;
    return fetchService(dispatch, `${USERS_API_URL}?q=${text}`, setUsersApiStatus);
}

export async function fetchUserInfoService(dispatch, user) {
    // debugger
    // const state = store.getState();
    // const userInfo = state.userInfo;
    return fetchService(dispatch, `${USER_INFO_API_URL}/${user.login}`, setUserInfoApiStatus);
}

export async function fetchUserReposService(dispatch) {
    const state = store.getState();
    const userInfo = state.userInfo;
    return fetchService(dispatch, userInfo.repos_url, setUserReposApiStatus);
}