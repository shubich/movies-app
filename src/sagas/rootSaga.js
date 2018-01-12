import { all } from 'redux-saga/effects';

import watchFilmsAsync from './films';
import watchPeopleAsync from './people';
import watchFilmDetailsAsync from './filmDetails';
import watchPersonDetailsAsync from './personDetails';
import watchSimilarFilmsAsync from './similarFilms';
import watchFilmsWithCastAsync from './filmsWithCast';
import watchMovieCreditsAsync from './movieCredits';


export default function* rootSaga() {
  yield all([
    watchFilmsAsync(),
    watchPeopleAsync(),
    watchFilmDetailsAsync(),
    watchPersonDetailsAsync(),
    watchSimilarFilmsAsync(),
    watchFilmsWithCastAsync(),
    watchMovieCreditsAsync(),
  ]);
}
