import { DESELECT_CARD } from '../app.actions';

export function goBack(appstore, router) {
  setPathHome(appstore);
  router.navigate(['/']);
}

export function setPathHome(appstore) {
  appstore.dispatch({
    type: DESELECT_CARD,
    payload: {
      item: null,
      title: null
    }
  });
}
