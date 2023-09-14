import React, { useContext } from 'react'
import { When } from 'react-if';
import { LoginContext } from '../Context/Context_Login/Context_Login';


export default function Auth(props) {
    const { loginData, able } = useContext(LoginContext)
    const isLogged = loginData.logged;
    const ableDo = props.capability ? able(props.capability) : true;
    const okToRender = isLogged && ableDo;
    console.log(ableDo, isLogged)
    return (
        <When condition={okToRender}>
            {props.children}
        </When>
    )
}