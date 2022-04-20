import { SET_OFFCANVAS_OPEN, SET_SHOW_LOADER,   SET_SHOW_ERROR, SET_SINGLE_ITEM } from '../types';

const initialState = {
  isOffcanvasOpen: false,
  isItemDataLoading: false,
  loaderShown: false,
  errorShown: false,
  singleItem: {} 
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFCANVAS_OPEN:
      return { ...state, isOffcanvasOpen: action.payload };
    case SET_SHOW_LOADER:
      return { ...state, showSingleItemLoader: action.payload};
    case SET_SINGLE_ITEM:
      return {...state, singleItem: action.payload}
    case SET_SHOW_ERROR: 
      return {...state, showSingleItemError: action.payload}

    default:
      return state;
  }
};
