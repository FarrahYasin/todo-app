export const initialState = {
    list: [],
}

export const ReducerList = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "CHANGE_THE_LIST": {
            return { ...state, list: [...state.list,payload] }
        }
        case "RE_PLACE_THE_LIST": {
            return { ...state, list: payload }
        }
        default: return state
    }
}