import { movies } from "../movies";
import { DELETE_MOVIE } from "../actions/movieActions";

const initialState = {
    movies: movies,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item => (action.payload !== item.id))
            }
        default:
            return state;
    }
}



export default movieReducer;

