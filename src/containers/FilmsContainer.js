import { connect } from 'react-redux';
import { Films } from '../components/Films';
import getFilmDetails from '../actions/getFilmDetails';
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
            window.scrollTo(0, 0);
        }
    };
}

const FilmsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (Films);

export default FilmsContainer;