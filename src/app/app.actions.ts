import { Action } from '@ngrx/store';

export const SELECT_CARD = 'SELECT_CARD';

export class SelectCard implements Action {
  readonly type = SELECT_CARD;
  payload: any;
}

export type SelectCardAction = SelectCard;
