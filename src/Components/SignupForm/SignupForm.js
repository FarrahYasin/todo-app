
import { Button, Flex, Input } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { LoginContext } from '../Context/Context_Login/Context_Login';
import { When } from 'react-if';
import axios from 'axios';
import './SignupForm.scss'; 

export default function SignUp() {
  const [usernameS, setUsernameS] = useState('');
  const [passwordS, setPasswordS] = useState('');
  const { login, loginData } = useContext(LoginContext);
  const [role, setRole] = useState('');

  async function handleSignupSub(e) {
    e.preventDefault();
    try {
      let res = await axios.post('https://hoehoehooo.onrender.com/signup', {
        username: usernameS,
        password: passwordS,
        role: role,
      });
      console.log(res);
      alert(`You have Signed up Successfully ${usernameS}`);
    } catch (err) {
      console.log('login ', err);
    }

    setPasswordS('');
    setUsernameS('');
    setRole('');
  }

  function handlePasswordChange(e) {
    setPasswordS(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsernameS(e.target.value);
  }

  function handleRoleChange(e) {
    setRole(e.target.value);
  }

  return (
    <div className="sign-up-container">
      <When condition={!loginData.logged}>
        <form onSubmit={handleSignupSub}>
          <Flex
            direction="column"
            m="20px"
            gap="10px"
            justify="center"
            align="center"
            className="sign-up-form"
          >
            <Input
              onChange={handleUsernameChange}
              placeholder="Username"
              required
              className="sign-up-input"
            />
            <Input
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              type="password"
              className="sign-up-input"
            />
            <Input
              onChange={handleRoleChange}
              placeholder="Role (admin, writer, editor, user)"
              required
              type="text"
              className="sign-up-input"
            />
            <Button type="submit" className="sign-up-button">
              Sign Up
            </Button>
          </Flex>
        </form>
      </When>
    </div>
  );
}


