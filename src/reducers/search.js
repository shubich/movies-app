import {
    SET_SEARCH_TYPE,
    SET_SORT_TYPE
} from '../constants/Search';

import { sortFilms } from '../utils';

const initialState = {
    searchType: 'title',
    sortType: ''
}

const search = (state = initialState, action) => {
    switch(action.type) {
        case SET_SORT_TYPE:
            return { ...state, sortType: action.filter };
        case SET_SEARCH_TYPE:
            return { ...state, searchType: action.filter };
        default:
            return state;
    }
}

export default search;