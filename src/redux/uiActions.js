import { SET_OFFCANVAS_OPEN, FETCH_SINGLE_ITEM, SHOW_SINGLE_ITEM_LOADER, SHOW_SINGLE_ITEM_ERROR} from "./types";

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

export function showSingleItemLoader(isShowSingleItemLoader) {
  return {
    type: SHOW_SINGLE_ITEM_LOADER,
    payload: isShowSingleItemLoader
  }
}
export function showSingleItemError(isShowSingleItemError) {
  return {
    type: SHOW_SINGLE_ITEM_ERROR,
    payload: isShowSingleItemError
  }
}

