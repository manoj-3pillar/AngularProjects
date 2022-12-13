import { createFeatureSelector } from '@ngrx/store';
import { IUser } from 'src/app/model/user';

export const selectUsers = createFeatureSelector<IUser[]>('appUsers');

