/*
Hi guy, I forgot to demonstrate usage of the Action file. 
In the video, we directly dispatched them using 'type' and 'payload' like:

dispatch({ type: "LOGIN_SUCCESS", payload: res.data});

But you can use actions.
dispatch(LoginSuccess(res.data))   and ofcourse import these function
*/

export const LoginStart = userCredentails => ({
  type: "LOGIN_START"
})

export const LoginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  payload: user
})

export const LoginFailure = () => ({
  type: "LOGIN_FALIURE",
})

export const Logout = () => ({
  type: "LOGOUT"
})

export const UpdateStart = userCredentails => ({
  type: "UPDATE_START"
})

export const LUpdateSuccess = user => ({
  type: 'UPDATE_SUCCESS',
  payload: user
})

export const LUpdateFailure = () => ({
  type: "UPDATE_FALIURE",
})
