/* eslint-disable no-prototype-builtins */

export const createReducer = (intialState, handlers) => (state = intialState, action) => (
  handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action)
    : state
);
