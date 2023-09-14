import { Button, Flex, Input } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { LoginContext } from '../Context/Context_Login/Context_Login';
import { When } from 'react-if';
import './login.css';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout, loginData } = useContext(LoginContext);

  function handleLogin(e) {
    e.preventDefault();
    login(username, password);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="login-form-container">
      <When condition={loginData.logged}>
        <div>
          <Button color="cyan" onClick={logout} className="logout-button">
            Log Out
          </Button>
        </div>
      </When>
      <When condition={!loginData.logged}>
        <form onSubmit={handleLogin}>
          <Flex
            direction="column"
            justify="center"
            align="center"
            className="login-form"
          >
            <Input
              onChange={handleUsernameChange}
              placeholder="Username"
              required
              className="login-input"
            />
            <Input
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              type="password"
              className="login-input"
            />
            <Button type="submit" className="login-button">
              Login
            </Button>
          </Flex>
        </form>
      </When>
    </div>
  );
}





