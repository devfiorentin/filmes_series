"use client";

import SerieCard from "../SerieCard/SerieCard";
import axios from "axios";
import { Info } from "../../types/InfoType";
import { useEffect, useState } from "react";

export function Series() {
  const [series, setSeries] = useState<Info[]>([]);

  useEffect(() => {
    getseries();
  }, []);

  const getseries = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/airing_today",
      params: {
        api_key: "cedbf2359cbaf18911fb47c89586cda1",
        language: "pt-BR",
      },
    }).then((response) => {
      setSeries(response.data.results);
      console.log(response.data.results);
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="px-5 py-5">
          <h1 className="text-2xl font-semibold text-white">Series de hoje</h1>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 justify-center items-center ">
          {series.map((serie: Info) => (
            <SerieCard key={serie.id} serie={serie} />
          ))}
        </ul>
      </div>
    </div>
  );
}
