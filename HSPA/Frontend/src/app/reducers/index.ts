import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../user.reducer';



export interface State {
  [fromUser.userFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromUser.userFeatureKey]: fromUser.userReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
