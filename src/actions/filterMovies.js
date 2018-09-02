import { FILTER_LANGUAGE,FILTER_COUNTRY,FILTER_YEAR,FILTER_NAME,FILTER_RATING } from '../constants/constants'


export const LanguageFilter = (data) => ({
  type:FILTER_LANGUAGE,
  payload:data
})

export const countryFilter = (countrydata) => ({
  type:FILTER_COUNTRY,
  payload:countrydata

})

export const yearFilter = (yeardata) => ({
  type:FILTER_YEAR,
  payload:yeardata
})

export const nameFilters = (namedata) => ({
  type:FILTER_NAME,
  payload:namedata
})

export const ratingFilters = (ratingdata) => ({
  type:FILTER_RATING,
  payload:ratingdata
})