import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/model/user';
import {
  actionUsersSuccess,
  actionUsers,
  actionUsersFailure
} from './user.actions';


export const userFeatureKey = 'usersState';

export interface State {
  users:IUser[],
  error:string

}

export const initialState: State = {
  users:[],
  error:''
};

export const userReducer = createReducer(
  initialState
);
