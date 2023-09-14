import React, { useReducer } from 'react'
import { initialState, ReducerList } from '../../../hooks/Reducer/ReducerList'

export const ListContext = React.createContext()

export default function ListsSaver(props) {

    const [data, dispatch] = useReducer(ReducerList, initialState)
    console.log(data)
    let listManage = { data, dispatch }
    return (
        <ListContext.Provider value={listManage}>
            {props.children}
        </ListContext.Provider>
    )
}