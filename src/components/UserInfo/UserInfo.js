import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserRepos, getUserInfo, getUserInfoApiStatus, getUserReposApiStatus } from '../../store/selectors';
import { setUserInfoApiStatus, fetchUserRepos, setShowModal } from '../../store/actions';
import './UserInfo.css';
import User from '../UsersList/User/User';
import statusCodes from '../../api-service/status-codes';
import Loader from '../Loader/Loader';
// import { debounce } from 'lodash';

function UserInfo(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => getUserInfo(state));
    const userRepos = useSelector(state => getUserRepos(state));
    const userReposApiStatus = useSelector(state => getUserReposApiStatus(state));
    useEffect(() => {
        if (user && ![statusCodes.successful, statusCodes.requesting].includes(userReposApiStatus)) {
            dispatch(fetchUserRepos(user));
        }
    }, [dispatch, user, userReposApiStatus]);
    const onClick = useCallback((event) => {
        dispatch(setShowModal(false));
        dispatch(setUserInfoApiStatus(statusCodes.notUsed));
    }, [dispatch]);
    const userInfoApiStatus = useSelector(state => getUserInfoApiStatus(state));
    return (
        <div className="user-info-modal">
            <div className="user-info-container">
            { [statusCodes.requesting, statusCodes.notUsed].includes(userInfoApiStatus)  ? 
                <Loader /> :
                (
                    <>
                        <User user={user || {}} />
                        <div className="xtra-info">
                            <div className="repos">
                                Repos: { (userRepos && userRepos.map(repo => repo.name).join(', ')) || 'n/a' }
                            </div>
                        </div>
                        <button
                            className="custom-button"
                            type="button"
                            onClick={onClick}
                        >
                            Close
                        </button>
                    </>
                )
            }
            </div>
        </div>
    );
}

export default UserInfo;