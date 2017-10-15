import { connect } from 'react-redux';
import { Films } from '../components/Films';
import getFilms from '../actions/getFilms';

const mapStateToProps = (state, ownProps) => {
    /* move to another file */
    let visibleFilms;
    if (ownProps.match.params.id) {
        const curFilmId = ownProps.match.params.id;
        visibleFilms = state.films.filter(movie =>
            movie.id != curFilmId
        );    
    } else visibleFilms = state.films;
    /* move to another file */
    
    return {
        films: visibleFilms
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilmClick: (id) => {
            console.log('onFilmClick ' + id);
        }
    };
}

const CurFilms = connect(
    mapStateToProps,
    mapDispatchToProps
) (Films);

export default CurFilms;