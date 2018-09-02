import { MOVIES_REQUEST_PENDING, MOVIES_REQUEST_SUCCESS, MOVIES_REQUEST_FAILED} from '../constants/constants'

export const fetchMovies = () => (dispatch) => {
  dispatch({type: MOVIES_REQUEST_PENDING})
  fetch('http://starlord.hackerearth.com/movieslisting')
    .then(response => response.json())
    .then(data => dispatch({type: MOVIES_REQUEST_SUCCESS, payload: data}))
    .catch(error => dispatch({type: MOVIES_REQUEST_FAILED, payload: error}))
}