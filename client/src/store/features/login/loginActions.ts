import { createAction } from "@reduxjs/toolkit";


export const POST_LOGIN = createAction<{ email: string; password: string; }>("login/POST_LOGIN");

export const LOGIN_FAILURE = createAction<{ error: string; }>("login/LOGIN_FAILURE");

export const LOGIN_SUCCESS = createAction<{ email: string; name: string; user_id: number; }>("login/LOGIN_SUCCESS");
