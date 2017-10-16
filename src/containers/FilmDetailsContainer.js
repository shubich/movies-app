import { connect } from 'react-redux';
import { FilmDetails } from '../components/FilmDetails';
import { getCurrentFilm } from '../utils';

const mapStateToProps = (state, ownProps) => {
    const filmId = ownProps.match.params.id;

    return {
        currentFilm: getCurrentFilm(
            filmId, 
            state.films
        )
    };
}

const FilmDetailsContainer = connect(
    mapStateToProps
) (FilmDetails);

export default FilmDetailsContainer;