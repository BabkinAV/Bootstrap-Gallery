import {
  SET_OFFCANVAS_OPEN
} from '../types';

const initialState = {
  isOffcanvasOpen: true,
  isItemDataLoading: false,
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFCANVAS_OPEN:
      return {...state, isOffcanvasOpen: action.payload}

    default: return state
  }

}

