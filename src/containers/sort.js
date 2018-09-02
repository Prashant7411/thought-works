import React, { Component } from 'react'
import { connect } from 'react-redux';
import Select from 'react-select';
import {Collapsible, CollapsibleItem} from 'react-materialize'
import { LanguageFilter, countryFilter,yearFilter,nameFilters,ratingFilters} from '../actions/filterMovies'
import { fetchCountries,allYears } from '../actions/fetchCountries'

const mapStateToProps = (state) => {
  return{
    sortRating:state.filterReducer.sortRating,
    sortLanguage:state.filterReducer.sortLanguage,
    countries:state.countriesReducer.countries,
    all_years:state.countriesReducer.all_years,
    movies:state.moviesReducer.movies,

    countryData:state.filterReducer.countryData,
    languageData:state.filterReducer.languageData,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return{
    
    onFetchCountries: () => (dispatch(fetchCountries())),
    allYears: (years) => (dispatch(allYears(years))),
    
    onCountrySelect: (countrydata) => (dispatch(countryFilter(countrydata))),
    onLanguageSelect: (data) => dispatch(LanguageFilter(data)),
    onYearSelect: (yearData) => dispatch(yearFilter(yearData)),
    onNameSelect: (nameData) => dispatch(nameFilters(nameData)),
    onContentRatingSelect: (ratingdata) => dispatch(ratingFilters(ratingdata))
  }
}

 class Sort extends Component {
   componentDidMount(){
     this.props.onFetchCountries()
     let years=[];
     let end_year = new Date().getFullYear()
     let start_year = '1900'
    for (let i = start_year;i<=end_year;i++){
     years.push(i);
    }
    this.props.allYears(years);
   }

   handleCountry(event){
    let current_value = event === null ? "" : event.value
    this.props.onCountrySelect(current_value)
   }

   handleLanguage(event){
    let current_value = event === null ? "" : event.value
    this.props.onLanguageSelect(current_value)
   }

   handleYear(event){
    let current_value = event === null ? "" : event.value.toString()
    this.props.onYearSelect(current_value)
   }

   handleName(event){
    let current_value = event === null ? "" : event.value
    this.props.onNameSelect(current_value)
   }

   handleContentRating(event){
    let current_value = event === null ? "" : event.value
    this.props.onContentRatingSelect(current_value)
   }

  render() {
    const colourStyles = {
      control: styles => ({ ...styles, height:'30px' })
    }
    return ( 
      <Collapsible accordion={false}>
        <CollapsibleItem header='Filters' icon='filter_list'>
          <h6>Name</h6>
          <Select styles={colourStyles}  isClearable={true}  onChange={this.handleName.bind(this)} options = {this.props.movies.map((name,index) => ({value: name.movie_title, label: name.movie_title}))}/>

          <h6>Country</h6>
          <Select styles={colourStyles}  isClearable={true}  onChange={this.handleCountry.bind(this)} options = {this.props.countries.map((country,index) => ({value: country.name, label: country.name}))}/>
          
        <h6>Language</h6>
            <Select styles={colourStyles} isClearable={true}  onChange={this.handleLanguage.bind(this)} options = {this.props.sortLanguage.map((lang,index) => ({value: lang, label: lang}))}/>
              
            <h6>Year</h6>
            <Select styles={colourStyles} isClearable={true}  onChange={this.handleYear.bind(this)} options = {this.props.all_years.map((year,index) => ({value: year, label: year}))}/>
            
            <h6>Content Rating</h6>
            <Select styles={colourStyles} isClearable={true}  onChange={this.handleContentRating.bind(this)} options = {this.props.sortRating.map((rating,index) => ({value: rating, label: rating}))}/>
            </CollapsibleItem>
        </Collapsible>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
