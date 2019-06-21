import { Action } from '@ngrx/store';

export const SELECT_CARD = 'SELECT_CARD';
export const DESELECT_CARD = 'DESELECT_CARD';

export class SelectCard implements Action {
  readonly type: any;
  payload: any;
}

export type SelectCardAction = SelectCard;
