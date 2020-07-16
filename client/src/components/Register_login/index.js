import React from 'react';
import MyButton from '../utils/Button';
import Login from './login'

const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas incidunt ut illo dolor voluptatibus adipisci, labore corrupti facere laudantium? Cumque cum quam, dicta cupiditate minima voluptatem sed. Fugit harum pariatur, voluptate praesentium sapiente nostrum iusto natus non, beatae eveniet neque!</p>
                        <MyButton 
                            type="default"
                            title="Create an Account"
                            linkTo="/register"
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="right">
                        <h2>Registered Customers</h2>
                        <p>If you have an account, please LOG IN</p>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLogin;