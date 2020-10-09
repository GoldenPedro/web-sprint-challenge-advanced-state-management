import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_ERROR,
    NEW_SMURF_START,
    NEW_SMURF_SUCCESS,
    NEW_SMURF_ERROR,
} from "../actions/actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: "",
};

export const Reducer = (state = initialState, action) => {
    console.log("This is the reducer", action);
    switch (action.type) {
        case FETCHING_SMURF_START:
            return { ...state, isFetching: true, error: "" };

        case FETCHING_SMURF_SUCCESS:
            return { ...state, smurfs: action.payload, isFetching: false, error: "" };

        case FETCHING_SMURF_ERROR:
            return { ...state, isFetching: false, error: action.payload };

        case NEW_SMURF_START:
            return { ...state, isFetching: true, error: "" };

        case NEW_SMURF_SUCCESS:
            return { ...state, smurfs: action.payload, isFetching: false, error: "" };

        case NEW_SMURF_ERROR:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};