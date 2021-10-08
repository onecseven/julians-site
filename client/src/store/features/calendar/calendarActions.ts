import { createAction } from "@reduxjs/toolkit";


export const POST_DATE = createAction<{ date: string; }>("calendar/POST_DATE");

export const GOT_DATE = createAction<{ timeslots: number[]; }>("calendar/GOT_DATE");

export const ERROR_DATE = createAction<{ error: string; }>("calendar/ERROR_DATE");

export const CLEAR_TIMESLOTS = createAction("calendar/CLEAR_TIMESLOTS");
