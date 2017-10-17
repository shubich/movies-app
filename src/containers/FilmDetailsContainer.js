import { connect } from 'react-redux';
import { FilmDetails } from '../components/FilmDetails';
import { getCurrentFilm } from '../utils';
import getFilmDetails from '../actions/getFilmDetails';

const mapStateToProps = (state) => {
    return {
        ...state.filmDetails
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const filmId = ownProps.match.params.id;
    
    return {
        getFilmDetails: (id=filmId) => {
            dispatch(
                getFilmDetails(id)
            )
        }
    };
}

const FilmDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (FilmDetails);

export default FilmDetailsContainer;