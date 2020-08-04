import { useDispatch } from "react-redux";

export const useSelectTile = (index) => {
  const dispatch = useDispatch();
  dispatch({ type: "selectTile", payload: index });
};
