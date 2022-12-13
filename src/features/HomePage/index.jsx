import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage(props) {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Đây là trang chủ</h1>
            <br /><br /><br />
            <button onClick={() => navigate("login")}>Login</button>
            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={() => navigate(1)}>Go forward</button>
        </div>
    );
}

export default HomePage;