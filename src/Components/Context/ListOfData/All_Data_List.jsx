import React, { useReducer } from 'react'
import { initialState, ReducerList } from '../../../Reducer/ReducerList'

export const ListContext = React.createContext()

export default function ListsSaver(props) {

    const [data, dispatch] = useReducer(ReducerList, initialState)

    let editList = { data, dispatch }
    
    return (
        <ListContext.Provider value={editList}>
            {props.children}
        </ListContext.Provider>
    )
}