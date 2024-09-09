// components/UserLayout.js
import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import UserHeader from './UserHeader';

const UserLayout = () => {
    const location = useLocation();

    return (
        <div>
            <UserHeader/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default UserLayout;
