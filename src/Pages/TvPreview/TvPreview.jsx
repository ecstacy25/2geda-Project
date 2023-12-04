import "./TvPreview.css";
import fifa from "../../Assets/fifa.png";
import Frame4 from "../../Assets/Frame4.png";
import testcard from "../../Assets/testcard.png";
const CommentsSection = () => {
  return (
    <main>
      <div className='main'>
      <img className='testcard' src={testcard} alt='' />
        <br />
        <br />
        <div id='Fifa'>
          <img className='img-fifa' src={fifa} alt='' />
        </div>
        <div className=''>
        <img className='frame4' src={Frame4} alt='' />
          <form action='' className="form">
            <label htmlFor='name'>Comments</label>
            <br />
            <input type='text' className='input' />
          </form>
          <div className="post">
          <button >Post</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommentsSection;
