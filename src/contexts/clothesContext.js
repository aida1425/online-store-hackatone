import React, { useReducer } from "react";
import axios from "axios";

export const clothesContext = React.createContext();

const INIT_STATE = {
  clothes: [],
  oneClothes: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CLOTHES":
      return {
        ...state,
        clothes: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 6),
      };
    case "GET_ONE":
      return { ...state, oneClothes: action.payload };
    default:
      return state;
  }
}

const CLOTHES_API = "http://localhost:8000/clothes";

const ClothesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // console.log(state);
  //! Create
  async function createClothes(newClothes) {
    await axios.post(CLOTHES_API, newClothes);
    getClothes();
  }
  //! Read
  async function getClothes() {
    const res = await axios(`${CLOTHES_API}${window.location.search}`);
    // console.log(res.headers["x-total-count"] / 2);
    // console.log(Math.ceil(res.headers["x-total-count"] / 2));
    dispatch({
      type: "GET_CLOTHES",
      payload: res,
    });
  }
  //! Delete
  async function deleteClothes(id) {
    await axios.delete(`${CLOTHES_API}/${id}`);
    getClothes();
  }
  //! Details, Get for edit
  async function getOneClothes(id) {
    const res = await axios(`${CLOTHES_API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: res.data,
    });
  }
  //! Update
  async function updateClothes(id, editedClothes) {
    await axios.patch(`${CLOTHES_API}/${id}`, editedClothes);
  }
  return (
    <clothesContext.Provider
      value={{
        clothes: state.clothes,
        oneClothes: state.oneClothes,
        pages: state.pages,
        createClothes,
        getClothes,
        deleteClothes,
        getOneClothes,
        updateClothes,
      }}>
      {children}
    </clothesContext.Provider>
  );
};
export default ClothesContextProvider;
