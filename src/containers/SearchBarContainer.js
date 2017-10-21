import { connect } from 'react-redux';
import { SearchBar } from '../components/SearchBar';
import getFilms from '../actions/getFilms';

const mapStateToProps = (state, ownProps) => {
    const initialVal = ownProps.match.url.split('/')[2];
    return {
        initialVal
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFilms: (val) => {
            dispatch(getFilms(val));
        }
    };
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (SearchBar);

export default SearchBarContainer;