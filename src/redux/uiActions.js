import { SET_OFFCANVAS_OPEN, FETCH_SINGLE_ITEM, SET_SHOW_ERROR, SET_SHOW_LOADER, FETCH_GALLERY } from "./types";

export const setOffCanvasOpen = (isOffcanvasOpen) => {
  return {
    type: SET_OFFCANVAS_OPEN,
    payload: isOffcanvasOpen,
  }
}

export function fetchSingleItem(itemId) {

  return {
    type: FETCH_SINGLE_ITEM,
    payload: itemId
  }
}
export function fetchGallery() {

  return {
    type: FETCH_GALLERY,
  }
}

export function setShowLoader(isLoaderShown) {
  return {
    type: SET_SHOW_LOADER,
    payload: isLoaderShown,
  }
}
export function setShowError(isErrorShown) {
  return {
    type: SET_SHOW_ERROR,
    payload: isErrorShown
  }
}

