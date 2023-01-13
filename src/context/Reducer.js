const Reducer = (state, action) => {
    switch (action.type) {
        case "APP_START":
            return {
                item: null,
                isFetching: true,
                error: false,
            };
        case "EDIT_SUCCESS":
            return {
                item: action.payload,
                isFetching: false,
                error: false,
            };
       
        default:
            return state;
    }
};

export default Reducer;
