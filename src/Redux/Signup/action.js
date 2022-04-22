export const SIGNUP_LOADING = "LOGIN_LOADING";
export const SIGNUP_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_ERROR = "LOGIN_ERROR";


export const signupLoading = ()=>({
    type:SIGNUP_LOADING
})

export const loginSuccess = (payload)=>({
    type:SIGNUP_SUCCESS,
    payload
})
export const loginError = ()=>({
    type:SIGNUP_ERROR
})

