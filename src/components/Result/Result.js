import React, { useState, useEffect } from "react";
import LoadMovie from "./LoadMovie/LoadMovie";
import "./result.css";
import { axios } from "./LoadMovie/axios";
import request from "./LoadMovie/request";
import { Trending } from "./LoadMovie/request";
import FlipMove from "react-flip-move";

function Result({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(selectedOption).catch((err) => {
        console.log(err);
      });
      console.log(req);
      if (req && req.data) {
        setMovies(req.data.results);
      }
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="result">
      <FlipMove>
        {movies.map((movie) => (
          <LoadMovie key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Result;
