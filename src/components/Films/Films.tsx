"use client";

import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import { Info } from "../../types/InfoType";
import { useEffect, useState } from "react";

export function Filmes() {
  const [movies, setMovies] = useState<Info[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "cedbf2359cbaf18911fb47c89586cda1",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">

        <div className="px-5 py-5">
          <h1 className="text-2xl font-semibold text-white">Confira os Filmes!</h1>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 justify-center items-center ">
          {movies.map((movie: Info) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}
