import { all } from 'redux-saga/effects';

import watchFilmDetailsAsync from './actions/getFilmDetails';
import watchSimilarFilmsAsync from './actions/getSimilarFilms';

// import { watchAsync as apiSaga } from './api';

export default function* rootSaga() {
  yield all([
    watchFilmDetailsAsync(),
    watchSimilarFilmsAsync(),
  ]);
}
