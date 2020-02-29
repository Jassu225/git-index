import React, { useCallback, useMemo } from 'react';
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
    
    const style = useMemo(() => {
        return {
            backgroundImage: `url(${user.avatar_url})`,
        };
    }, [user]);
    return (
        <div
            className="user"
            onClick={onClick}
        >
            <div
                className="user-avatar"
                style={style}
            />
            <div className="user-name">
                <span className="data-header">name:</span>
                { user.login }
            </div>
            <div className="user-score">
                <span className="data-header">score:</span>
                { user.score }
            </div>
        </div>
    );
}

export default User;