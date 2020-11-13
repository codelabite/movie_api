import "./LoadMovie.css";
import React, { forwardRef } from "react";
import img from "../../../img/p22.jpg";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
const base_url = "https://image.tmdb.org/t/p/original/";

const LoadMovie = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="loadMovies">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        className="loadMovies__desc"
        line={2}
        element="p"
        truncateText="  ..."
        textTruncateChild={<a href="/">Read more</a>}
        text={movie.overview}
      />
      <div className="loadMovies__text">
        <div>{movie.title || movie.original_name}</div>
        <p className="loadMovies__textThumbs">
          Total likes <ThumbUpSharp />: {movie.vote_count}
        </p>
        <div className="loadMovies__textTitleContainer">
          <p className="loadMovies__textTitleDate">
            Released Date: {""}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="loadMovies__textTitleRelease">
            {movie.media_type && `${movie.media_type} `}
          </p>
        </div>
      </div>
    </div>
  );
});

export default LoadMovie;
