import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/fetchMovies'
import { MovieCard } from '../components/movieCard'
import TopRatedMovies from '../components/topRatedMovies'
import Sort from './sort'
import {Nodatafound} from '../components/UI_components/noDataFound'
import { Sliders } from '../components/UI_components/sliders'
import {Nav} from '../components/UI_components/navbar' 


const mapStateToProps = (state) => {
  return{
    movies:state.moviesReducer.movies,
    isPending:state.moviesReducer.isPending,

    countryData:state.filterReducer.countryData,
    languagedata:state.filterReducer.languagedata,
    yeardata:state.filterReducer.yeardata,
    namedata:state.filterReducer.namedata,
    ratingdata:state.filterReducer.ratingdata
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onFetchMovies: () => dispatch(fetchMovies())
  }
}

class Movies extends Component {

  componentDidMount(){
    this.props.onFetchMovies();
  }
  render() {
    
    const { movies, languagedata, countryData, yeardata,namedata,ratingdata} = this.props
      let filterMovies = movies;
      let state_pair = {}
      state_pair["language"] = languagedata;
      state_pair["country"] = countryData;
      state_pair["title_year"] = yeardata;
      state_pair["movie_title"] = namedata;
      state_pair["content_rating"] = ratingdata;
      ["movie_title","country","language","title_year","content_rating"].forEach(function(filterBy) {
        var filterValue = state_pair[filterBy]
        if (filterValue) {
          filterMovies = filterMovies.filter(function(item) {
            return item[filterBy] === filterValue;
          });
        }
      });

    if(this.props.isPending){
      return(
        <div className="loading">
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      )
      }
    return (
      <div>
        <Nav/>
        <Sliders/>
        <div className="row">
          <div className="col s12">
            <div className="col s3">
              <div className="row">
                <div className="col s12">
                  <Sort/>
                </div>  
              </div>
              <div className="row">
                <TopRatedMovies/>
              </div>
             </div>
            {filterMovies.length > 0 &&
            <div className="col s9">
            {filterMovies.map((movie,i) => (
            <div className="col s4" key={i}>
            <MovieCard movie={movie}/>
            </div>
          ))}
            </div>}
            {filterMovies.length === 0 &&
            <div className="col s9">
              <Nodatafound/>
            </div>}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
