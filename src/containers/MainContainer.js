import { connect } from 'react-redux';
import { Main } from '../components/Main';
import getFilmDetails from '../actions/getFilmDetails';
import { sortFilms } from '../utils';

const mapStateToProps = (state, ownProps) => {
    if (state.search.searchType === 'title') {
        return {
            ...state.search,
            ...state.films,
            results: sortFilms(state.films.results, state.search.sortType)
        };
    } else if (state.search.searchType === 'person') {
        return {
            ...state.search,
            ...state.people
        };
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => {
            //window.scrollTo(0, 0);
        }
    };
}

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (Main);

export default MainContainer;