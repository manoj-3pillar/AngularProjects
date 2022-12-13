import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/model/user';

export const actionUsers = createAction(
  '[User] Action Users'
);

export const actionUsersSuccess = createAction(
  '[User] Action Users Success',
  props<{ allUsers: IUser[] }>()
);

export const actionUsersFailure = createAction(
  '[User] Action Users Failure',
  props<{ error: string }>()
);

