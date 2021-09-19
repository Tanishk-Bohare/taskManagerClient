export default (state, action) => {
    switch(action.type) {
      case 'ADD_USER':
        return {
          ...state,
          loading: false,
          user: action.payload.data,
          token: action.payload.token,
          isLoggedIn: true
        }
      case 'LOGIN_USER':
        return {
          ...state,
          loading: false,
          user: action.payload.data,
          token: action.payload.token,
          isLoggedIn: true
        }
      case 'UPDATE_USER':
        return {
          ...state,
          loading: false,
          user: action.payload.data,
        }
      case 'LOGOUT_USER':
        return {
          ...state,
          loading: false,
          isLoggedIn: false,
          token: undefined,
          tasks: []
        }
      case 'LOGOUTALL_USER':
        return {
          ...state,
          loading: false,
          isLoggedIn: false,
          token: undefined,
          tasks: []
        }
      case 'DELETE_USER':
        return {
          ...state,
          loading: false,
          user: action.payload.data,
          token: undefined,
          isLoggedIn: false,
          tasks: []
        }
      case 'GET_TASKS':
        return {
          ...state,
          loading: false,
          tasks: action.payload
        }
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task._id !== action.payload)
        }
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload.data]
        }
      case 'TASK_ERROR':
        return {
          ...state,
          error: action.payload
        }
      case 'USER_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }