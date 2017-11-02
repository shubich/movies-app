import { all } from 'redux-saga/effects';

import watchFilmsAsync from './actions/getFilms';
import watchPeopleAsync from './actions/getPeople';
import watchFilmDetailsAsync from './actions/getFilmDetails';
import watchPersonDetailsAsync from './actions/getPersonDetails';
import watchSimilarFilmsAsync from './actions/getSimilarFilms';
import watchFilmsWithCastAsync from './actions/getFilmsWithCast';


export default function* rootSaga() {
  yield all([
    watchFilmsAsync(),
    watchPeopleAsync(),
    watchFilmDetailsAsync(),
    watchPersonDetailsAsync(),
    watchSimilarFilmsAsync(),
    watchFilmsWithCastAsync(),
  ]);
}

// 1. create async action
// 2. import action to rootSaga
// 3. dispatch(async) somewhere
