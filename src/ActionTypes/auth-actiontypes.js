
//Create USER Action Types
export const REQUEST_REGISTER='auth/REQUEST_REGISTER';
export const REQUEST_REGISTER_FAILURE='auth/REQUEST_REGISTER_FAILURE';
export const RECEIVE_REGISTER_SUCCESS ='auth/RECEIVE_REGISTER_SUCCESS';
export const RECEIVE_REGISTER_FAILURE='auth/RECEIVE_REGISTER_FAILURE';

//LOGIN Action Types
export const REQUEST_LOGIN='auth/REQUEST_LOGIN';
export const REQUEST_LOGIN_FAILURE='auth/REQUEST_LOGIN_FAILURE';
export const RECEIVE_LOGIN_SUCCESS ='auth/RECEIVE_LOGIN_SUCCESS';
export const RECEIVE_LOGIN_FAILURE='auth/RECEIVE_LOGIN_FAILURE';

//LOGOUT Action Types
export const REQUEST_LOGOUT='auth/REQUEST_LOGOUT';
export const REQUEST_LOGOUT_FAILURE='auth/REQUEST_LOGOUT_FAILURE';
export const RECEIVE_LOGOUT_SUCCESS ='auth/RECEIVE_LOGOUT_SUCCESS';
export const RECEIVE_LOGOUT_FAILURE='auth/RECEIVE_LOGOUT_FAILURE';

//toggle auth status (expired token)
export const CHANGE_AUTH_STATUS ='auth/CHANGE_AUTH_STATUS';
export const DISMISS_NOTIFICATION ="auth/DISMISS_NOTIFICATION";
export const DISMISS_SUCCESS_NOTIFICATION = "auth/DISMISS_SUCCESS_NOTIFICATION";
export const THROW_ERROR ="auth/THROW_ERROR";
export const THROW_SUCCESS = "auth/THROW_SUCCESS";
