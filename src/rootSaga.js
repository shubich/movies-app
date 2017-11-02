import { all } from 'redux-saga/effects';

import watchFilmDetailsAsync from './actions/getFilmDetails';
import watchSimilarFilmsAsync from './actions/getSimilarFilms';
import watchFilmsAsync from './actions/getFilms';
import watchPeopleAsync from './actions/getPeople';


export default function* rootSaga() {
  yield all([
    watchFilmsAsync(),
    watchPeopleAsync(),
    watchFilmDetailsAsync(),
    watchSimilarFilmsAsync(),
  ]);
}
