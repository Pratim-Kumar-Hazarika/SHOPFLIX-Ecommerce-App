import { toast } from "react-toastify";
import { css } from "glamor";
export const toastDesign = {
  className: css({
    background: "#ff3f6c !important",
    color: "white !important",
    fontFamily: "Overpass, sans-serif"
  }),
  closeOnClick: false,

  autoClose: true,
  closeButton: false,
  position: toast.POSITION.BOTTOM_CENTER
};
