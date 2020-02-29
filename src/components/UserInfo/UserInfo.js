import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserRepos, getUserInfo, getUserInfoApiStatus } from '../../store/selectors';
import { setUserInfo, fetchUserRepos, setShowModal } from '../../store/actions';
import './UserInfo.css';
import User from '../UsersList/User/User';
import statusCodes from '../../api-service/status-codes';
import Loader from '../Loader/Loader';
// import { debounce } from 'lodash';

function UserInfo(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => getUserInfo(state));
    const userRepos = useSelector(state => getUserRepos(state));
    useEffect(() => {
        if (user) {
            dispatch(fetchUserRepos(user));
        }
    }, [user]);
    const onClick = useCallback((event) => {
        dispatch(setShowModal(false));
    }, [dispatch]);
    const userInfoApiStatus = useSelector(state => getUserInfoApiStatus(state));
    return (
        <div className="user-info-modal">
            { [statusCodes.requesting, statusCodes.notUsed].includes(userInfoApiStatus)  ? 
                <Loader /> :
                (<div className="user-info-container">
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
                </div>)
            }
        </div>
    );
}

export default UserInfo;