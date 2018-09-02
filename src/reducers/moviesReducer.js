import { MOVIES_REQUEST_PENDING, MOVIES_REQUEST_SUCCESS, MOVIES_REQUEST_FAILED, FILTER_LANGUAGE,COUNTRIES_REQUEST_PENDING, COUNTRIES_REQUEST_SUCCESS, COUNTRIES_REQUEST_FAILED, ALL_YEARS,FILTER_COUNTRY,FILTER_YEAR,FILTER_NAME,FILTER_RATING} from '../constants/constants'

const initalStateMoviesReducer = {
  movies:[],
  isPending:false
}

export const moviesReducer = (state=initalStateMoviesReducer, action={}) => {
  switch(action.type){
    case MOVIES_REQUEST_PENDING:
      return {...state,isPending:true}
    case MOVIES_REQUEST_SUCCESS:
      return {...state,movies:action.payload,isPending:false}
    case MOVIES_REQUEST_FAILED:
      return {...state,error:action.payload}
    default:
      return state
  }
}

const initalStateFilterReducer = {
  sortLanguage:['English'],
  sortRating:['PG-13','PG','R','G','TV-G','TV-MA'],
  languagedata:"",
  countryData:"",
  yeardata:"",
  namedata:"",
  ratingdata:""
}

export const filterReducer = (state=initalStateFilterReducer,action={}) => {
  switch(action.type){
    case FILTER_LANGUAGE:
      return {...state,languagedata:action.payload}
    case FILTER_COUNTRY:
      return {...state,countryData:action.payload === 'United States of America' ? "USA" : action.payload === "United Kingdom of Great Britain and Northern Ireland" ? "UK" : action.payload}
    case FILTER_YEAR:
      return {...state,yeardata:action.payload}
    case FILTER_NAME:
      return {...state,namedata:action.payload}
    case FILTER_RATING:
      return {...state,ratingdata:action.payload}
    default:
      return state
  }
}

const initalStateCountriesReducerr = {
  countries:[],
  all_years:[],
}

export const countriesReducer = (state=initalStateCountriesReducerr,action={}) => {
  switch(action.type){
    case COUNTRIES_REQUEST_PENDING:
      return {...state}
    case COUNTRIES_REQUEST_SUCCESS:
      return {...state,countries:action.payload}
    case COUNTRIES_REQUEST_FAILED:
      return {...state,error:action.payload}
    case ALL_YEARS: 
    return {...state,all_years:action.payload}
    default:
      return state
  }
}