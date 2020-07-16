import React from 'react';
import UserLayout from '../../hoc/userLayout';
import MyButton from '../utils/Button';

const UserDashboard = ({user}) => {
    return (
        <UserLayout>
            <div>
                <div className="user_nfo_panel"> 
                    <h2>User Information</h2>
                    <div>
                        <span>{user.userData.name}</span>
                        <span>{user.userData.lastname}</span>
                        <span>{user.userData.email}</span>
                    </div>
                    <MyButton 
                        type="default"
                        title="Edit Account Information"
                        linkTo="/user/user_profile"
                    />
                </div>

                <div className="user_nfo_panel">
                    <h1>History Purchases</h1>
                    <div className="user_product_block_wrapper">
                        History
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default UserDashboard;