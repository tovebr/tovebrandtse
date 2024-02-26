import portrait from '../../assets/portrait.png';
import './Home.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div id='home'>
      <div className='img-container'>
        <img id='portrait' src={portrait} />
      </div>

      <h1 className='heading'>tove brandt</h1>
      <HeaderMenu />
      <Footer />
    </div>
  );
}

export default Home;
