import { connect } from 'react-redux';
import FilmDetails from '../components/FilmDetails';
import getFilmDetails from '../actions/getFilmDetails';
import getSimilarFilms from '../actions/getSimilarFilms';

const mapStateToProps = state => ({
  ...state.filmDetails,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const filmId = ownProps.match.params.id;

  return {
    getFilmDetails: (id = filmId) => {
      dispatch(getFilmDetails(id));
    },
    getSimilarFilms: (id = filmId) => {
      dispatch(getSimilarFilms(id));
    },
  };
};

const FilmDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmDetails);

export default FilmDetailsContainer;
