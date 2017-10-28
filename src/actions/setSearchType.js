import { SET_SEARCH_TYPE } from '../constants/Search';

const setSearchType = filter => ({
  type: SET_SEARCH_TYPE,
  filter,
});

export default setSearchType;
