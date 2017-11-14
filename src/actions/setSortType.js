import { SET_SORT_TYPE } from '../constants/Search';

const setSortType = filter => ({
  type: SET_SORT_TYPE,
  filter,
});

export default setSortType;
