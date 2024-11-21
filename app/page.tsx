w"use client";

import { useEffect, useState } from 'react';
import { Film } from '../types';

export default function Home() {
  const [films, setFilms] = useState<Film[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/getFilms')
      .then(response => response.json())
      .then(data => setFilms(data));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredFilms = films.filter(film =>
    film.titel.toLowerCase().includes(search.toLowerCase()) ||
    film.genre.toLowerCase().includes(search.toLowerCase()) ||
    film.acteurs.some(acteur => acteur.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div class="container">
      <h1>nosql</h1>

      <label class="search-label">
        <input
          type="text"
          name="text"
          class="input"
          placeholder="Type here..."
          value={search}
          onChange={handleSearch} />
      </label>

      <ul>
        {filteredFilms.map(film => (
          <li key={film._id}>
            {film.titel} - {film.genre} - {film.jaar} - {film.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}