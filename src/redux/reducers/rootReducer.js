import { SET_OFFCANVAS_OPEN, SET_SHOW_LOADER,   SET_SHOW_ERROR, SET_SINGLE_ITEM, SET_GALLERY } from '../types';

const initialState = {
  isOffcanvasOpen: false,
  isItemDataLoading: false,
  loaderShown: false,
  errorShown: false,
  singleItemData: {},
  galleryData: [] 
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFCANVAS_OPEN:
      return { ...state, isOffcanvasOpen: action.payload };
    case SET_SHOW_LOADER:
      return { ...state, loaderShown: action.payload};
      case SET_SHOW_ERROR: 
        return {...state, errorShown: action.payload}
    case SET_SINGLE_ITEM:
      return {...state, singleItemData: action.payload}
    case SET_GALLERY:
      return {...state, galleryData: action.payload}

    default:
      return state;
  }
};
