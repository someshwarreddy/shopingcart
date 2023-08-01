import { createReducer, on } from '@ngrx/store';
import { ecommApiActions, ProductActions } from './ecomm.actions';
import { productid } from '../ecomm.model';

export const initialState: ReadonlyArray<string> = [];

export const productReducer = createReducer(
    initialState,
    on(ProductActions.product, (_state, { productid }) => [..._state, productid])
);