import React from 'react';
import { userSelector } from '../store/user/selectors';
import { useSelector } from 'react-redux';
import { history } from '../history';
import { ROUTES } from '../constants';

const UserDashboard = () => {
    const user = useSelector(userSelector);
    const logout = () => {
        localStorage.clear();
        history.push(ROUTES.LOGIN);
    }

    return (
        <div>
            <p>User dashboard</p>
            {user && 
                <div>
                    <p>{user.username}</p>
                    <button onClick={logout}>Log out</button>
                </div>
            }
            
        </div>
    )
}

export default UserDashboard;