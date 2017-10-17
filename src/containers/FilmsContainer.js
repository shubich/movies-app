import { connect } from 'react-redux';
import { Films } from '../components/Films';
import getFilms from '../actions/getFilms';
import { getVisibleFilms } from '../utils';

const mapStateToProps = (state, ownProps) => {
    const filmId = ownProps.match.params.id;
    
    return {
        ...state.films,
        results: getVisibleFilms(
            filmId,
            state.films.results
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilmClick: (id) => {
            console.log('onFilmClick ' + id);
        }
    };
}

const FilmsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (Films);

export default FilmsContainer;