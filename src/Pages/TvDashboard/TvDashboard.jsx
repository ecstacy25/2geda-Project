import React, { useState, useEffect } from "react";
import "./TvDashboard.css";
import fifa from "../../Assets/fifa.png";
import movie from "../../Assets/movie.png";
import movie1 from "../../Assets/movie1.png";
import search from "../../Assets/search.png";
import frame from "../../Assets/frame.png";
import frame1 from "../../Assets/frame1.png";
import frame6 from "../../Assets/frame6.png";
import back from "../../Assets/back.png";
import Thumbnail from "../../Components/Thumbnails/Thumbnail";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");

  useEffect(() => {
    const sampleMovies = [
      { id: 1, title: "Top Flight maverick...", imageUrl: movie },
      { id: 2, title: "Top Flight maverick...", imageUrl: movie },
      { id: 3, title: "Top Flight maverick...", imageUrl: movie },
      { id: 4, title: "Top Flight maverick...", imageUrl: movie },
    ];
    setMovies(sampleMovies);
  }, []);

  return (
    <>
      <main className='yes'>
        <div className='main'>
          <div className='cont'>
            <h2>TV</h2>
            <div>
              <img src={back} alt='' />
            </div>
          </div>
          <div className='search-container'>
            <input
              type='text'
              placeholder='Search for movies'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img className='search-icon' src={search} alt='' />
          </div>
          <div className='movies-container'>
            {movies.map((movie) => (
              <div key={movie.id} className='movie-card'>
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className='movie-img'
                />
                <h3 className='movie-title'>{movie.title}</h3>
              </div>
            ))}
          </div>
          <div id='Fifa'>
            <img className='img-fifa1' src={fifa} alt='' />
          </div>
          <div className='Movie'>
            <img
              src={movie1}
              alt='image'
              width=''
              height=''
              className='movie-img'
            />
            <div id='movie'>
            <img className='movie-img1' src={frame6} alt='' />
            </div>
          </div>
          <div>
            <Thumbnail title='Top Movies' />
            <Thumbnail title='New Releases' />
            <Thumbnail title='Kids and Family' />
          </div>
        </div>
        <aside>
          <div className='sidebar2'>
            <h2>Your library</h2>
            <div className='flash'>
              <div className='library'>
                <div class='library-container'>
                  <input
                    type='text'
                    placeholder='Find in library'
                    value={searchTerm1}
                    onChange={(e) => setSearchTerm1(e.target.value)}
                  />
                  <img className='search-icon1' src={search} alt='' />
                  <button id='btn'>Search</button>
                </div>
              </div>
            </div>
            <div className='extra'>
              <h3>History</h3>
              <div className='History'>
                <img src={movie} alt='image' width='' height='' className='' />
                <img src={movie} alt='image' width='' height='' className='' />
              </div>
              <div>
                <img
                  src={frame}
                  alt='image'
                  width=''
                  height=''
                  className='frame'
                />
              </div>
            </div>
          </div>
          <aside>
            <div className='sidebar2'>
              <img
                src={frame1}
                alt='image'
                width=''
                height=''
                className='frame'
              />
            </div>
          </aside>
        </aside>
      </main>
    </>
  );
};

export default MovieCard;
