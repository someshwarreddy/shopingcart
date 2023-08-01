import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ecomm } from '../ecomm.model';

export const selectecomm = createFeatureSelector<ecomm[]>('ecomm');