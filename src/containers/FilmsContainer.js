import { connect } from 'react-redux';
import { Films } from '../components/Films';
import getFilms from '../actions/getFilms';
import { getVisibleFilms } from '../utils';

const mapStateToProps = (state, ownProps) => {
    const filmId = ownProps.match.params.id;
    
    return {
        films: getVisibleFilms(
            filmId, 
            state.films
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