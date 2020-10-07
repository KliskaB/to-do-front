import React from 'react';
import { userSelector } from '../store/user/selectors';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
    const user = useSelector(userSelector);

    return (
        <div>
            <p>User dashboard</p>
            {user && <p>Log out</p>}
        </div>
    )
}

export default UserDashboard;