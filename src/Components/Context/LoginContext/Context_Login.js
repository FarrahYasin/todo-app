import React, { useEffect, useReducer } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import { initialState, ReducerLogin } from '../../../hooks/Reducer/ReducerLogin';
import axios from 'axios';


export const LoginContext = React.createContext();

function LoginProvider(props) {
    const [loginData, dispatch] = useReducer(ReducerLogin, initialState)

    function able(capability) {
        return loginData.user.capabilities?.includes(capability);
    }

    async function login(username, password) {
        console.log('....running')
        let { logged, token, user } = loginData;
        let res = await axios.post('https://hoehoehooo.onrender.com/signin', {}, {
            headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` }
        })
        console.log(res.data.message.user)
        console.log(res.data.message.user.token)
        let auth = res.data.message.user
        console.log(auth.token)
        console.log(auth.password)
        console.log(auth.username)

        if (auth ) {
            try {
                validateToken(auth.token);
            } catch (e) {
                setLoginState(logged, token, user, e);
            }
        }
    }

    function logout() {
        setLoginState(false, null, {});
    };

    function validateToken(token) {
        try {
            let validUser = jwt_decode(token);
            setLoginState(true, token, validUser);
        }
        catch (e) {
            setLoginState(false, null, {}, e);
        }

    };

    function setLoginState(logged, token, user, err) {
        cookie.save('auth', token);

        dispatch({ type: 'CHANGE_THE_LOG', payload: logged })
        dispatch({ type: 'CHANGE_THE_TOKEN', payload: token })
        dispatch({ type: 'CHANGE_THE_USER', payload: user })
        dispatch({ type: 'CHANGE_THE_ERR', payload: err })
    };

    function componentDidMount() {
        const qs = new URLSearchParams(window.location.search);
        const cookieToken = cookie.load('auth');
        const token = qs.get('token') || cookieToken || null;
        validateToken(token);
    }
    useEffect(() => {
        componentDidMount()
 
    }, [])


    return (
        <LoginContext.Provider value={{ able, login, logout, loginData, dispatch }}>
            {props.children}
        </LoginContext.Provider>
    );

}

export default LoginProvider;