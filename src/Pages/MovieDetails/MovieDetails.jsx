import "./MovieDetails.css";
import movie from "../../Assets/movie.png";
import like from "../../Assets/like.png";
import frame3 from "../../Assets/frame3.png";
import download from "../../Assets/download.png";
import play from "../../Assets/play.png";
import Thumbnail from "../../Components/Thumbnails/Thumbnail";
const MovieDetails = () => {
  return (
    <main>
      <div className='main'>
      <img src={movie} alt='Play' width='1100px' height='700px'className=""/>
        <div>
        <img src={frame3} alt='Play' className="frame3"/>
        </div>
        
        <img src={play} alt='Play' className="Play"/>
      
        <div className='video'>
        <img src={like} alt='Play' className="like"/>
        <img src={download} alt='Play' className="download"/>
        </div>
        <div id='about'>
        <h2>About this movie</h2>
        <p >
          
          In the midst of World War II, a daring love story unfolds against the
          <br /> backdrop of a secret drive-in theatre operating amidst the
          chaos of battle.
          <br /> A brave American soldier and a resilient local woman find
          solace and love in
          <br /> the midst of war-torn Europe, all under the stars of the
          drive-in theatre.
          <br />
          <br />
          <b>Starring:</b> Chris Evans, Alicia Vikander, Tom Hardy, Eva Green,
          Sam Claflin, Daniel Bruhl
        </p>
        </div>
       
        
        <div className="topmovies">
            <Thumbnail title='People also viewed' />
        </div>
        <div className=''>
          
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
