import React, { useMemo } from 'react';
import './UsersList.css';
import User from './User/User';
import { useSelector } from 'react-redux';
import { getUsers, getUsersApiStatus } from '../../store/selectors';
import statusCodes from '../../api-service/status-codes';
import Loader from '../Loader/Loader';

function UsersList(props) {
    const users = useSelector(state => getUsers(state));
    const userEls = useMemo(() => {
        if (users && users.length) {
            return users.map((user) => {
                return <User user={user} key={user.id} />;
            });
        }
        return [];
    }, [ users ]);
    const userApiStatus = useSelector(state => getUsersApiStatus(state));
    return (
        <div className="users-list-continer">
            <div className="users-list">
                { [statusCodes.requesting].includes(userApiStatus) ? 
                  <Loader /> : userEls }
            </div>
        </div>
    );
}

export default UsersList;