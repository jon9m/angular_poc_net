import { SelectCardAction, SELECT_CARD, DESELECT_CARD } from './app.actions';

const initialState = {
  cardselected: {}
};


export function appReducer(state = initialState, action: SelectCardAction) {
  switch (action.type) {
    case SELECT_CARD:
      return action.payload;
    case DESELECT_CARD:
      return action.payload;
    default:
      return state;
  }
}
