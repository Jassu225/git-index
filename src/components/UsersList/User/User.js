import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './User.css';
import { fetchUserInfo, setShowModal } from '../../../store/actions';

function User(props) {
    // login, avatar_url, score
    const user = props.user;
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        dispatch(setShowModal(true));
        dispatch(fetchUserInfo(user));
    }, [dispatch, user]);
    return (
        <div className="user">
            <div
                className="user-avatar"
                onClick={onClick}
            >
                <img
                    src={user.avatar_url}
                    alt="avatar"
                />
            </div>
            <div className="user-name">
                { user.login }
            </div>
            <div className="user-score">
                Score - { user.score }
            </div>
        </div>
    );
}

export default User;