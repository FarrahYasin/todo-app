export const initialState = {
    itemPerPage: 3,
    sort: 'difficulty',
    showCompleted: false
}


export const ReducerStates = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "CHANGE_THE_SHOW": {
            return { ...state, showCompleted: payload }
        }
        case "CHANGE_THE_SORT": {
            return { ...state, sort: payload }
        }
        case "CHANGE_NUMBER_OF_TASKS": {
            return { ...state, itemPerPage: payload }
        }
        default: return state
    }
}


