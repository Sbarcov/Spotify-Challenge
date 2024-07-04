import { createAction, props } from "@ngrx/store";
import { User } from "../models/user";

export const logIn =  createAction('[userService] login', props<User>());