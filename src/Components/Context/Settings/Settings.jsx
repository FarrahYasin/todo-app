import React, { useEffect, useReducer } from 'react'
import { ReducerStates, initialState } from '../../../hooks/Reducer/ReducerStates'
export const SettingContext = React.createContext()
export default function Settings(props) {

    const [settings, dispatch] = useReducer(ReducerStates, initialState, () => {
        const localData = localStorage.getItem('settings');
        return localData ? JSON.parse(localData) : initialState;
    })
    console.log(settings)
    let vals = { settings, dispatch }

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings))
    }, [settings])
    
    return (
        <SettingContext.Provider value={vals}>
            {props.children}
        </SettingContext.Provider>
    )
}