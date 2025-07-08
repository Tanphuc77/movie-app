import { useState, useEffect } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import MovieList from './components/MovieList'

function App() {
  const [movie, setMovie] = useState([])
  const [movieRate, setMovieRate] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const url = 'https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=1';

      const url1 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi-US&page=1';
      try {
        const [response, response1] = await Promise.all([
          fetch(url, options),
          fetch(url1, options)
        ]);

        const data = await response.json();
        const data1 = await response1.json();

        setMovie(data.results);
        setMovieRate(data1.results);

      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }

    fetchMovie();
  }, [])

  return (
    <>
      <div className="bg-black overflow-x-hidden">
        <Header />
        <Banner />
        <MovieList title={"Phim mới"} data={movie} />
        <MovieList title={"Phim đề xuất"} data={movieRate} />
      </div>
    </>
  )
}

export default App;
