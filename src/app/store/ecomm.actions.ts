import { createAction, createActionGroup, props } from '@ngrx/store';
import { ecomm,productid } from '../ecomm.model';
export const ecommApiActions = createActionGroup({
    source: 'ecomm API',
    events: {
        'ecomm List': props<{ ecomm: ReadonlyArray<ecomm> }>(),
    },
});

export const ProductActions = createActionGroup({
    source: 'Product',
    events: {
      'Product': props<{ productid: string }>(),
     
    },
  });