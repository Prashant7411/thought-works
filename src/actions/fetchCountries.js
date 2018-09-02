import { COUNTRIES_REQUEST_PENDING, COUNTRIES_REQUEST_SUCCESS, COUNTRIES_REQUEST_FAILED, ALL_YEARS } from '../constants/constants'


export const fetchCountries = () => (dispatch) => {
  dispatch({type:COUNTRIES_REQUEST_PENDING})
  fetch('https://restcountries.eu/rest/v2/all?fields=name')
    .then(response => response.json())
    .then(data => dispatch({type:COUNTRIES_REQUEST_SUCCESS,payload:data}))
    .catch(error => dispatch({type:COUNTRIES_REQUEST_FAILED,payload:error}))
}

export const allYears = (years) => ({
  type:ALL_YEARS,
  payload:years
})