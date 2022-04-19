import { SET_OFFCANVAS_OPEN, SHOW_SINGLE_ITEM_LOADER, HIDE_SINGLE_ITEM_LOADER, SHOW_SINGLE_ITEM_ERROR, SET_SINGLE_ITEM } from '../types';

const initialState = {
  isOffcanvasOpen: false,
  isItemDataLoading: false,
  showSingleItemLoader: false,
  showSingleItemError: false,
  singleItem: {} 
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFCANVAS_OPEN:
      return { ...state, isOffcanvasOpen: action.payload };
    case SHOW_SINGLE_ITEM_LOADER:
      return { ...state, showSingleItemLoader: action.payload};
    case SET_SINGLE_ITEM:
      return {...state, singleItem: action.payload}
    case SHOW_SINGLE_ITEM_ERROR: 
      return {...state, showSingleItemError: action.payload}

    default:
      return state;
  }
};
