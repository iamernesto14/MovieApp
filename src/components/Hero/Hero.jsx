import { PlayIcon } from '../../assets/icons/Icons';
import { Link } from 'react-router-dom';

import IMDbLogo from '../../assets/IMDb.png';
import TomatoeLogo from '../../assets/tomatoe.png';
import HeadlineImage from '../../assets/poster.svg';

import './Hero.scss';

const Hero = () => {
  return (
    <section
      className="headline"
      style={{
        backgroundImage: `url(${HeadlineImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="headline-content">
        <h1>John Wick 3 : Parabellum</h1>
        <div className="ratting">
          <span>
            <img src={IMDbLogo} alt="IMDb logo" />
            <span>86.0 / 100</span>
          </span>
          <span>
            <img src={TomatoeLogo} alt="IMDb logo" />
            <span>97%</span>
          </span>
        </div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

        <Link to="#">
          <PlayIcon />
          Watch trailer
        </Link>
      </div>
    </section>
  );
};

export default Hero;
