import { connect } from 'react-redux';
import FilmDetails from '../components/FilmDetails';
import { getFilmDetailsAsync } from '../actions/getFilmDetails';
import { getSimilarFilmsAsync } from '../actions/getSimilarFilms';

const mapStateToProps = state => ({
  ...state.filmDetails,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const filmId = ownProps.match.params.id;

  return {
    getFilmDetails: (id = filmId) => {
      dispatch(getFilmDetailsAsync(id));
    },
    getSimilarFilms: (id = filmId) => {
      dispatch(getSimilarFilmsAsync(id));
    },
  };
};

const FilmDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmDetails);

export default FilmDetailsContainer;
