import { Info } from "../../types/InfoType";

export interface Props {
  serie: Info;
}

export default function serieCard(props: Props) {
  const serie = props.serie;
  return (
    <li className="w-[150px] sm:w-[250px] rounded-lg overflow-hidden shadow-lg group relative hover:scale-105 transition-transform duration-200 ease-in-out">
      <img
        src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
        alt={serie.title}
        className="w-auto h-auto object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
        <h1 className="font-bold text-xl mb-2 text-white">{serie.title}</h1>
        <p className="text-gray-200 text-sm line-clamp-3 mb-4">
          {serie.overview}
        </p>
        <a
          href={`/serie/${serie.id}`}
          className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition-colors duration-200"
        >
          Ver mais
        </a>
      </div>
    </li>
  );
}
