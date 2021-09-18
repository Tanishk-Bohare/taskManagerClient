import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// intial state
const initialState = {
    isLoggedIn: false,
    user: '',
    tasks: [],
    token: '',
    error: null,
    loading: true
}

// Create context 
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalContextProvider = ({children}) =>{

    const [state, dispatch ] = useReducer(AppReducer, initialState) 

    // Actions
    const addUser = async (user) => {
        try {
            const res = await axios.post('users', user, {
                headers:{'Content-type': 'application/json' } } )
            // console.log(res.data, "error from response")
            dispatch({
                type: 'ADD_USER',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.response.error
            })
        }
    }

    const loginUser = async (user) => {
        try {
            const res = await axios.post('users/login', user, {
                headers:{'Content-type': 'application/json' } } )
            // console.log(res.data)
            dispatch({
                type: 'LOGIN_USER',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.response.error
            })
        }
    }

    const updateUser = async (user) => {
        try {
            const res = await axios.patch('users/me', user, {
                headers:{'Content-type': 'application/json', 
                        "Authorization" : `Bearer ${state.token}`
            } } )
            // console.log(res.data)
            dispatch({
                type: 'UPDATE_USER',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.response.error
            })
        }
    }

    const logoutUser = async () => {
        try {
            // console.log(state)
            const res = await axios.post('users/logout', state.user,{
                headers:{'Content-type': 'application/json',
                        "Authorization" : `Bearer ${state.token}`} } )
            // console.log(res.data)
            dispatch({
                type: 'LOGOUT_USER',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.error
            })
        }
    }

    const logoutAllUser = async () => {
        try {
            // console.log(state)
            const res = await axios.post('users/logoutAll', state.user,{
                headers:{'Content-type': 'application/json',
                        "Authorization" : `Bearer ${state.token}`} } )
            // console.log(res.data)
            dispatch({
                type: 'LOGOUTALL_USER',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.error
            })
        }
    }

    const deleteUser = async () => {
        try {
            const res = await axios.delete('users/me', {
                headers:{'Content-type': 'application/json',
                        "Authorization" : `Bearer ${state.token}`
             } } )
            // console.log( "response from api", res.data)
            dispatch({
                type: 'DELETE_USER',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.response.error
            })
        }
    }
    
    const getTasks = async () => {
        try {
            const res= await axios.get('tasks', {
                 headers: {"Authorization" : `Bearer ${state.token}`} })
            // console.log(res.data)
            dispatch({
                type: 'GET_TASKS',
                payload: res.data
            })

        } catch (err) {
            // console.log(err)
            dispatch({
                type: 'TASK_ERROR',
                payload: err.error
            })
        }
    }


    const deleteTask = async (id) => {
        try {
            await axios.delete(`tasks/${id}`, { 
                headers: {"Authorization" : `Bearer ${state.token}`} })
            
            dispatch({
                type: 'DELETE_TASK',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'TASK_ERROR',
                payload: err.response.error
            })
        }
    }

    const addTask = async (task) => {
        const config = { 
            headers: {
                'Content-type': 'application/json', 
                "Authorization" : `Bearer ${state.token}`
            }
        }

        try {
            const res = await axios.post('tasks', task, config)
            dispatch({
                type: 'ADD_TASK',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'TASK_ERROR',
                payload: err.error
            })
        }   
    }
    
    return (<GlobalContext.Provider value={{
        isLoggedIn: state.isLoggedIn,
        user: state.user,
        tasks: state.tasks,
        error: state.error,
        loading: state.loading,
        addUser,
        loginUser,
        updateUser,
        logoutUser,
        logoutAllUser,
        deleteUser,
        deleteTask,
        addTask,
        getTasks
    }} >
        {children}
    </GlobalContext.Provider> ) 
}