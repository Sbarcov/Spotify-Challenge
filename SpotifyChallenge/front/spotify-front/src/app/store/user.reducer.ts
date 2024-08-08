import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user";
import { logIn } from "./user.actions";

export const initialState: User = JSON.parse(sessionStorage.getItem('user')!) || [];

export const userReducer = createReducer(
    initialState,
    on(logIn, (state, payload) => state = payload)
);