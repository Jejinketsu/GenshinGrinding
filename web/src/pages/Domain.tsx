import { FaStar } from 'react-icons/fa';

import TopBar from '../components/TopBar';

import '../styles/pages/Domain.css';

// Domain images
import d1weapon1 from '../images/domain-items/days1/WeaponM_1.png';
import d1weapon2 from '../images/domain-items/days1/WeaponM_2.png';
import d1weapon3 from '../images/domain-items/days1/WeaponM_3.png';
import d1weapon4 from '../images/domain-items/days1/WeaponM_4.png';
import d1weapon11 from '../images/domain-items/days1/WeaponM_1-1.png';
import d1weapon21 from '../images/domain-items/days1/WeaponM_2-1.png';
import d1weapon31 from '../images/domain-items/days1/WeaponM_3-1.png';
import d1weapon41 from '../images/domain-items/days1/WeaponM_4-1.png';
import d1book1 from '../images/domain-items/days1/Book_1.png';
import d1book2 from '../images/domain-items/days1/Book_2.png';
import d1book3 from '../images/domain-items/days1/Book_3.png';
import d1book11 from '../images/domain-items/days1/Book_1-1.png';
import d1book21 from '../images/domain-items/days1/Book_2-1.png';
import d1book31 from '../images/domain-items/days1/Book_3-1.png';

import d2weapon1 from '../images/domain-items/days2/WeaponM_1.png';
import d2weapon2 from '../images/domain-items/days2/WeaponM_2.png';
import d2weapon3 from '../images/domain-items/days2/WeaponM_3.png';
import d2weapon4 from '../images/domain-items/days2/WeaponM_4.png';
import d2weapon11 from '../images/domain-items/days2/WeaponM_1-1.png';
import d2weapon21 from '../images/domain-items/days2/WeaponM_2-1.png';
import d2weapon31 from '../images/domain-items/days2/WeaponM_3-1.png';
import d2weapon41 from '../images/domain-items/days2/WeaponM_4-1.png';
import d2book1 from '../images/domain-items/days2/Book_1.png';
import d2book2 from '../images/domain-items/days2/Book_2.png';
import d2book3 from '../images/domain-items/days2/Book_3.png';
import d2book11 from '../images/domain-items/days2/Book_1-1.png';
import d2book21 from '../images/domain-items/days2/Book_2-1.png';
import d2book31 from '../images/domain-items/days2/Book_3-1.png';

import d3weapon1 from '../images/domain-items/days3/WeaponM_1.png';
import d3weapon2 from '../images/domain-items/days3/WeaponM_2.png';
import d3weapon3 from '../images/domain-items/days3/WeaponM_3.png';
import d3weapon4 from '../images/domain-items/days3/WeaponM_4.png';
import d3weapon11 from '../images/domain-items/days3/WeaponM_1-1.png';
import d3weapon21 from '../images/domain-items/days3/WeaponM_2-1.png';
import d3weapon31 from '../images/domain-items/days3/WeaponM_3-1.png';
import d3weapon41 from '../images/domain-items/days3/WeaponM_4-1.png';
import d3book1 from '../images/domain-items/days3/Book_1.png';
import d3book2 from '../images/domain-items/days3/Book_2.png';
import d3book3 from '../images/domain-items/days3/Book_3.png';
import d3book11 from '../images/domain-items/days3/Book_1-1.png';
import d3book21 from '../images/domain-items/days3/Book_2-1.png';
import d3book31 from '../images/domain-items/days3/Book_3-1.png';

import char1 from '../images/domain-items/characters/char1.png';
import char2 from '../images/domain-items/characters/char2.png';
import char3 from '../images/domain-items/characters/char3.png';

function Domain() {
  return (
    <>
      <TopBar pageLink='domain' />

      <main className='container'>
        <section className='content'>
          <article className='weekdays-card'>
            <h2 className='weekdays-title'>Monday/Thursday</h2>

            <h2 className='weekdays-subtitle'>Domains of Forgery</h2>
            <div className='domain-cards'>
              <section className='domain-card'>
                <h4 className='domain-card-title'>Cecilia Garden</h4>
                <div className='images'>
                  <div className='image-block'>
                    <img
                      src={d1weapon11}
                      alt='Weapon'
                      className='domain-card-img'
                    />

                    <div className='item-detail-card'>
                      <div className='header'>Teachings of "Prosperity"</div>
                      <div className='info'>
                        <span className='type'>Talent Level-Up Material</span>
                        <img src={d1weapon11} alt='' className='image' />
                        <div className='stars'>
                          <FaStar size={16} color='#FFD739' />
                          <FaStar size={16} color='#FFD739' />
                        </div>
                      </div>
                      <div className='characters'>
                        <img src={char1} alt='' className='character' />
                        <img src={char2} alt='' className='character' />
                        <img src={char3} alt='' className='character' />
                      </div>
                    </div>
                  </div>

                  <img
                    src={d1weapon21}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d1weapon31}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d1weapon41}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                </div>
              </section>

              <section className='domain-card'>
                <h4 className='domain-card-title'>
                  Hidden Palace of Lianshan Formula
                </h4>
                <div className='images'>
                  <img
                    src={d1weapon1}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d1weapon2}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d1weapon3}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d1weapon4}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                </div>
              </section>
            </div>

            <h2 className='weekdays-subtitle'>Domains of Mastery</h2>
            <div className='domain-cards'>
              <section className='domain-card'>
                <h4 className='domain-card-title'>Taishan Mansion</h4>
                <div className='images'>
                  <img src={d1book11} alt='Book' className='domain-card-img' />
                  <img src={d1book21} alt='Book' className='domain-card-img' />
                  <img src={d1book31} alt='Book' className='domain-card-img' />
                </div>
              </section>

              <section className='domain-card'>
                <h4 className='domain-card-title'>Forsaken Rift</h4>
                <div className='images'>
                  <img src={d1book1} alt='Book' className='domain-card-img' />
                  <img src={d1book2} alt='Book' className='domain-card-img' />
                  <img src={d1book3} alt='Book' className='domain-card-img' />
                </div>
              </section>
            </div>
          </article>

          <article className='weekdays-card'>
            <h2 className='weekdays-title'>Tuesday/Friday</h2>

            <h2 className='weekdays-subtitle'>Domains of Forgery</h2>
            <div className='domain-cards'>
              <section className='domain-card'>
                <h4 className='domain-card-title'>Cecilia Garden</h4>
                <div className='images'>
                  <img
                    src={d2weapon11}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d2weapon21}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d2weapon31}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d2weapon41}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                </div>
              </section>

              <section className='domain-card'>
                <h4 className='domain-card-title'>
                  Hidden Palace of Lianshan Formula
                </h4>
                <div className='images'>
                  <img
                    src={d2weapon1}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d2weapon2}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d2weapon3}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d2weapon4}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                </div>
              </section>
            </div>

            <h2 className='weekdays-subtitle'>Domains of Mastery</h2>
            <div className='domain-cards'>
              <section className='domain-card'>
                <h4 className='domain-card-title'>Taishan Mansion</h4>
                <div className='images'>
                  <img src={d2book11} alt='Book' className='domain-card-img' />
                  <img src={d2book21} alt='Book' className='domain-card-img' />
                  <img src={d2book31} alt='Book' className='domain-card-img' />
                </div>
              </section>

              <section className='domain-card'>
                <h4 className='domain-card-title'>Forsaken Rift</h4>
                <div className='images'>
                  <img src={d2book1} alt='Book' className='domain-card-img' />
                  <img src={d2book2} alt='Book' className='domain-card-img' />
                  <img src={d2book3} alt='Book' className='domain-card-img' />
                </div>
              </section>
            </div>
          </article>

          <article className='weekdays-card'>
            <h2 className='weekdays-title'>Wednesday/Saturday</h2>

            <h2 className='weekdays-subtitle'>Domains of Forgery</h2>
            <div className='domain-cards'>
              <section className='domain-card'>
                <h4 className='domain-card-title'>Cecilia Garden</h4>
                <div className='images'>
                  <img
                    src={d3weapon11}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d3weapon21}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d3weapon31}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d3weapon41}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                </div>
              </section>

              <section className='domain-card'>
                <h4 className='domain-card-title'>
                  Hidden Palace of Lianshan Formula
                </h4>
                <div className='images'>
                  <img
                    src={d3weapon1}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d3weapon2}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d3weapon3}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                  <img
                    src={d3weapon4}
                    alt='Weapon'
                    className='domain-card-img'
                  />
                </div>
              </section>
            </div>

            <h2 className='weekdays-subtitle'>Domains of Mastery</h2>
            <div className='domain-cards'>
              <section className='domain-card'>
                <h4 className='domain-card-title'>Taishan Mansion</h4>
                <div className='images'>
                  <img src={d3book11} alt='Book' className='domain-card-img' />
                  <img src={d3book21} alt='Book' className='domain-card-img' />
                  <img src={d3book31} alt='Book' className='domain-card-img' />
                </div>
              </section>

              <section className='domain-card'>
                <h4 className='domain-card-title'>Forsaken Rift</h4>
                <div className='images'>
                  <img src={d3book1} alt='Book' className='domain-card-img' />
                  <img src={d3book2} alt='Book' className='domain-card-img' />
                  <img src={d3book3} alt='Book' className='domain-card-img' />
                </div>
              </section>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Domain;
