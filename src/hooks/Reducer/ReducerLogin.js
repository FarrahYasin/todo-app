export let initialState = {
    user: {
        capabilities: [] 
    },
    logged: false,
    token:'',
    err: null
  }

export function ReducerLogin (state, action) {
    const {type, payload} = action

  switch (type){
      case 'CHANGE_STATUS_OF_LOGIN': {
          return {...state, logged:payload}
      }
      case 'changeLogoutStatus': {
          return {...state, logged:false}
      }
      case 'CHANGE_THE_USER': {
          return {...state, user: payload}
      }
      case 'CHANGE_THE_TOKEN': {
          return {...state, token: payload}
      }
      case 'CHANGE_THE_ERR': {
          return {...state, err:payload}
      }
      default:{
          return state
      }
  }
}