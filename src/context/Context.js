import React, { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    //
    item: JSON.parse(localStorage.getItem("item")) || null,
    isFetching: false,
    error: false,
};
export const EditContext = createContext(INITIAL_STATE);

export const EditContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("item", JSON.stringify(state.item))
    }, [state.item])

    return (
        <EditContext.Provider
            value={{
                item: state.item,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}>
            {children}
        </EditContext.Provider>
    );
};