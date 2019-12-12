import fetch from '../http/index.js'

export const userLogin = (params) => fetch.fetchPost('/user/login',params);

export const userRegister = (params) => fetch.fetchPost('/user/register',params);