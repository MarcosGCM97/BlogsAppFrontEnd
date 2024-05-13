import React from "react";

const LoginForm = ({ submitLogin, onChangeUser, onChangePassword, username, password, error }) => {
    return <form className="loginForm" onSubmit={submitLogin}>
        <h2>Sign in</h2>
        <p>{error}</p>
        <div className="loginDiv">
            Username:
                <input 
                className="loginInput"
                type='text'
                value={username}
                name="Username"
                onChange={onChangeUser}
                placeholder="Marcos Congregado"
                />
        </div>
        <div className="loginDiv">
            Password:
                <input
                className="loginInput"
                type="password"
                value={password}
                name="Password"
                onChange={onChangePassword}
                placeholder="loboNegro"
                />
        </div>
        <button className="loginButton" type="submit">Login</button>
    </form>
}

export default LoginForm