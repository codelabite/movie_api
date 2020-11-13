import React from "react";
import "./style.css";
import request from "../Result/LoadMovie/request";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchTrending);
        }}
      >
        Tranding
      </h3>

      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchTV);
        }}
      >
        Top_Rated
      </h3>

      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchActionMovies);
        }}
      >
        Action
      </h3>

      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchComedyMovies);
        }}
      >
        Comedy
      </h3>

      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchRomanceMovies);
        }}
      >
        Romance
      </h3>

      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchMystery);
        }}
      >
        Mystery
      </h3>

      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchSciFi);
        }}
      >
        Sci_fi
      </h3>

      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchWestern);
        }}
      >
        Western
      </h3>

      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchAnimation);
        }}
      >
        Animation
      </h3>

      <h3
        onClick={() => {
          console.log("I am clicked");
          setSelectedOption(request.fetchHorrorMovies);
        }}
      >
        Movie
      </h3>
    </div>
  );
}

export default Nav;
