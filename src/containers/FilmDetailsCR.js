import { connect } from 'react-redux';
import { FilmDetails } from '../components/FilmDetails';
import { movies } from '../data';

const mapStateToProps = (state, ownProps) => {
    /* move to another file */
    const filmId = ownProps.match.params.id;
    const isCurFilm = (film, index, array) => {
        return film.id == filmId;
    };
    const curFilm = movies.find(isCurFilm);
    /* move to another file */

    return {
        curFilm
    };
}

const FilmDetailsCR = connect(
    mapStateToProps
) (FilmDetails);

export default FilmDetailsCR;