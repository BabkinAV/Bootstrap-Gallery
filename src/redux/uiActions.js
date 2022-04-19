import { SET_OFFCANVAS_OPEN } from "./types";

export const setOffCanvasOpen = (isOffcanvasOpen) => {
  return {
    type: SET_OFFCANVAS_OPEN,
    payload: isOffcanvasOpen,
  }
}

