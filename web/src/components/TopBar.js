import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

import '../styles/components/TopBar.css';

import logo from '../images/logo-genshin-2.png';
// import avatar from '../images/avatar.png';

function TopBar({pageLink}) {

  return (
    <header className='top-bar'>
      <nav className='wrapper'>
        <a href='/'>
          <img src={logo} alt='Logo' className='logo' />
        </a>

        <div className='wrapper-left'>
          <div className='links'>
            <Link
              to='/characters'
              className={pageLink === 'characters' ? 'link active' : 'link'}
            >
              Characters
            </Link>
            <Link
              to='/domain'
              className={pageLink === 'domain' ? 'link active' : 'link'}
            >
              Domain
            </Link>

          </div>

          <div className='profile-area'>
            <ul>
              <li>
                <span className='nickname'>Aucelora</span>
                <FaRegUserCircle size={32} color='#ffffff' />
                {/* <img src={avatar} alt='Avatar image' className='avatar' /> */}
                <ul>
                  <li><Link to='/characters'>Personagens</Link></li>
                  <li><Link to='/logout'>Logout</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default TopBar;
