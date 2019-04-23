import {
  SHOW_LOADING_SPINNER,
  CLEAR_MOVIES,
  SEARCH_MOVIES,
  GET_POPULAR_MOVIES,
  LOAD_MORE_MOVIES,
  SET_POPULAR_PERSISTED_STATE
} from "../actions";

const defaultState = {
  movies: [],
  heroImage: null,
  loading: false,
  currentPage: 0,
  totalPages: 0,
  searchTerm: ""
};

export default function(state = defaultState, actions) {
  switch (actions.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state, //get all variabel
        movies: actions.payload.results,
        heroImage: state.heroImage || actions.payload.results[0],
        loading: false,
        currentPage: actions.payload.page,
        totalPages: actions.payload.total_pages,
        searchTerm: ""
      };
    case LOAD_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...actions.payload.results],
        loading: false,
        currentPage: actions.payload.page,
        totalPages: actions.payload.total_pages
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: actions.payload.results,
        loading: false,
        currentPage: actions.payload.page,
        totalPages: actions.payload.total_pages,
        searchTerm: actions.payload.searchTerm
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: []
      };
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      };
    case SET_POPULAR_PERSISTED_STATE:
      return {
        ...state,
        ...actions.payload
      };
    default:
      return state;
  }
}
