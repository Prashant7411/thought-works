import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    top_rated_movies: state.moviesReducer.movies,
    isPending:state.moviesReducer.isPending
  }
}

class TopRatedMovies extends Component {
  render() {
    let top_rated_movies_P_13 = [];
    let top_rated_movies_PG = [];
    let top_rated_movies_R = [];
    let top_rated_movies_G = []
    let top_rated_movies_TV_G = [];
    let top_rated_movies_TV_MA = [];
    let count_TV_G = 1;
    let count_P_13 = 1;
    let count_PG = 1;
    let count_R = 1;
    let count_G = 1;
    let count_TV_MA = 1;
    if(!this.props.isPending){
      for(let i=0;i<this.props.top_rated_movies.length;i++){
        if(count_P_13 <=10 && this.props.top_rated_movies[i].content_rating === "PG-13"){
          top_rated_movies_P_13.push(this.props.top_rated_movies[i].movie_title)
          count_P_13++
        }
      }
      for(let i=0;i<this.props.top_rated_movies.length;i++){
        if(count_PG <=10 && this.props.top_rated_movies[i].content_rating === "PG"){
          top_rated_movies_PG.push(this.props.top_rated_movies[i].movie_title)
          count_PG++
        }
      }
      for(let i=0;i<this.props.top_rated_movies.length;i++){
        if(count_R <=10 && this.props.top_rated_movies[i].content_rating === "R"){
          top_rated_movies_R.push(this.props.top_rated_movies[i].movie_title)
          count_R++
        }
      }
      for(let i=0;i<this.props.top_rated_movies.length;i++){
        if(count_G <=10 && this.props.top_rated_movies[i].content_rating === "G"){
          top_rated_movies_G.push(this.props.top_rated_movies[i].movie_title)
          count_G++
        }
      }
      for(let i=0;i<this.props.top_rated_movies.length;i++){
        if(count_TV_G <=10 && this.props.top_rated_movies[i].content_rating === "TV-G"){
          top_rated_movies_TV_G.push(this.props.top_rated_movies[i].movie_title)
          count_TV_G++
        }
      }
      for(let i=0;i<this.props.top_rated_movies.length;i++){
        if(count_TV_MA <=10 && this.props.top_rated_movies[i].content_rating === "TV-MA"){
          top_rated_movies_TV_MA.push(this.props.top_rated_movies[i].movie_title)
          count_TV_MA++
        }
      }
    }
    if(!this.props.isPending){
  
    return (
      <div>
        <div className="top__movie__card__details">
          <div className="top__movie__card__details__heading__box">
            <div className="top__movie__card__details__heading">10 Top Rated  P-13 Movies</div>
          </div>
          <ul>
            {top_rated_movies_P_13.length !== 0 && top_rated_movies_P_13.map((topMovies,i) => (
              <li key={i}>{topMovies}</li>
            ))}
          </ul>
        </div>
        <div className="top__movie__card__details">
          <div className="top__movie__card__details__heading__box">
            <div className="top__movie__card__details__heading">10 Top Rated PG Movies</div>
          </div>
          <ul>
            {top_rated_movies_PG.length !== 0 && top_rated_movies_PG.map((topMovies,i) => (
              <li key={i}>{topMovies}</li>
            ))}
          </ul>
        </div>
        <div className="top__movie__card__details">
          <div className="top__movie__card__details__heading__box">
            <div className="top__movie__card__details__heading">10 Top Rated R Movies</div>
          </div>
          <ul>
            {top_rated_movies_R.length !== 0 && top_rated_movies_R.map((topMovies,i) => (
              <li key={i}>{topMovies}</li>
            ))}
          </ul>
        </div>
        <div className="top__movie__card__details">
          <div className="top__movie__card__details__heading__box">
            <div className="top__movie__card__details__heading">10 Top Rated G Movies</div>
          </div>
          <ul>
            {top_rated_movies_G.length !== 0 && top_rated_movies_G.map((topMovies,i) => (
              <li key={i}>{topMovies}</li>
            ))}
          </ul>
        </div>
        <div className="top__movie__card__details">
          <div className="top__movie__card__details__heading__box">
            <div className="top__movie__card__details__heading">10 Top Rated TV-G Movies</div>
          </div>
          <ul>
            {top_rated_movies_TV_G.length !== 0 && top_rated_movies_TV_G.map((topMovies,i) => (
              <li key={i}>{topMovies}</li>
            ))}
          </ul>
        </div>
        <div className="top__movie__card__details">
          <div className="top__movie__card__details__heading__box">
            <div className="top__movie__card__details__heading">10 Top Rated TV-MA Movies</div>
          </div>
          <ul>
            {top_rated_movies_TV_MA.length !== 0 && top_rated_movies_TV_MA.map((topMovies,i) => (
              <li key={i}>{topMovies}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  }
}


export default connect(mapStateToProps)(TopRatedMovies);