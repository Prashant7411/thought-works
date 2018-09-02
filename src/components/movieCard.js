import React from 'react'

export const MovieCard = ({movie}) => {
  let G = '(G – General Audiences) All ages admitted. Nothing that would offend parents for viewing by children.';
  let PG = "(PG – Parental Guidance Suggested) Some material may not be suitable for children. Parents urged to give 'parental guidance'";
  let PG_13 = "(PG-13 – Parents Strongly Cautioned) Some material may be inappropriate for children under 13. Parents are urged to be cautious.";
  let R = "(R – Restricted) Under 17 requires accompanying parent or adult guardian. Contains some adult material."
  let TV_MA = "This program is specifically designed to be viewed by adults and teens, and therefore may be unsuitable for children under 13"
  let TV_G = "Programs suitable for all ages";
  return (
    <div className="movie__card">
        <div className="movie__card__side movie__card__side--front">
          <div className="movie__card__picture movie__card__picture--1">&nbsp;</div>
          <h4 className="movie__card__heading">
            <span className="movie__card__heading-span movie__card__heading-span--1">{movie.language ? movie.language : "NA"}</span>
          </h4>
          <div className="movie__card__details">
              <ul>
                <li>{movie.movie_title}</li>
                <li>{movie.genres}</li>
                <li><strong>Year:&nbsp;</strong>{movie.title_year ? movie.title_year : "NA"}</li>
              </ul>
          </div>
        </div>
        <div className="movie__card__side movie__card__side--back movie__card__side--back-1">
          <div className="movie__card__details--back">
            <ul>
              <li><strong>Director:&nbsp;</strong>{movie.director_name ? movie.director_name : "NA"}</li>
              <li><strong>Actor:&nbsp;</strong>{movie.actor_1_name ? movie.actor_1_name : "NA"},&nbsp;{movie.actor_2_name ? movie.actor_2_name : "NA"}</li>
              <li><strong>Language:&nbsp;</strong>{movie.language ? movie.language : "NA"}</li>
              <li><strong>country:&nbsp;</strong>{movie.country ? movie.country : "NA"}</li>
              <li><strong>Rating:&nbsp;</strong>{movie.content_rating ? movie.content_rating : "NA"}</li>
              <li><a className="IMDB__Link" target="_blank" href={movie.movie_imdb_link} >IMDB</a></li>
              
              <li>{movie.content_rating === "G" ? G : movie.content_rating === "PG" ? PG : movie.content_rating === "PG-13" ? PG_13 : movie.content_rating === "R" ? R : movie.content_rating === "TV-MA" ? TV_MA : movie.content_rating === "TV-G" ? TV_G : ""}</li>
            </ul>
          </div>
        </div>
      </div>
  )
}
