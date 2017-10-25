import { connect } from 'react-redux';
import { SearchBar } from '../components/SearchBar';
import getFilms from '../actions/getFilms';
import getPeople from '../actions/getPeople';
import setSearchType from '../actions/setSearchType';

const mapStateToProps = (state, ownProps) => {
    const searchQuery = ownProps.match.url.split('/')[2] || null;
    return {
        searchQuery,
        ...state.search
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFilms: (val) => {
            dispatch(getFilms(val));
        },
        getPeople: (val) => {
            dispatch(getPeople(val));
        },
        setSearchType: (val) => {
            dispatch(setSearchType(val));
        }
    };
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (SearchBar);

export default SearchBarContainer;