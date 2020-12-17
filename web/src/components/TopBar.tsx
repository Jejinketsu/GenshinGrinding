import { FaRegUserCircle } from 'react-icons/fa';

import '../styles/components/TopBar.css';

import logo from '../images/logo-genshin-2.png';
// import avatar from '../images/avatar.png';

function TopBar({
  pageLink = 'characters',
}: {
  pageLink?: 'characters' | 'domain';
}) {
  return (
    <header className='top-bar'>
      <nav className='wrapper'>
        <a href='/'>
          <img src={logo} alt='Logo' className='logo' />
        </a>

        <div className='wrapper-left'>
          <div className='links'>
            <a
              href='/characters'
              className={pageLink === 'characters' ? 'link active' : 'link'}
            >
              Characters
            </a>
            <a
              href='/domain'
              className={pageLink === 'domain' ? 'link active' : 'link'}
            >
              Domain
            </a>
          </div>

          <div className='profile-area'>
            <span className='nickname'>Aucelora</span>

            <FaRegUserCircle size={32} color='#ffffff' />
            {/* <img src={avatar} alt='Avatar image' className='avatar' /> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default TopBar;
