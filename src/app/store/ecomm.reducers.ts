import { createReducer, on } from '@ngrx/store';
import { ecommApiActions, ProductActions} from './ecomm.actions';
import { ecomm} from '../ecomm.model';

export const initialState: ReadonlyArray<ecomm> = [];

export const ecommReducer = createReducer(
    initialState,
    on(ecommApiActions.ecommList, (_state, { ecomm}) => ecomm)
);

