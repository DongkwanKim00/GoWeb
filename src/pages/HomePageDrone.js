import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import SliderImg from '../components/SliderImg';

const HomePageDrone = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

 
  const navigateToSearchEdu = () => {
    navigate('/searchedu');
    setButtonClicked(true);
  };

  const navigateToSearchFarm = () => {
    navigate('/searchfarm');
    setButtonClicked(true);
  };

  const navigateToSearchToy = () => {
    navigate('/searchtoy');
    setButtonClicked(true);
  };

  const navigateToSearchTransport = () => {
    navigate('/searchtransport');
    setButtonClicked(true);
  };

  return (
    <div style={{ marginTop: '-55px' }}>
      <div
        style={{
          background: `url('/cloudBackground.gif') no-repeat center`,
          WebkitBackgroundSize: 'cover',
          MozBackgroundSize: 'cover',
          OBackgroundSize: 'cover',
          backgroundSize: 'cover',
          minHeight: '100vh',
          padding: '150px',
        }}
      >
        <div style={{ marginTop: '70px' }}>
          <SliderImg />
          <button
            type="button"
            className="btm_image"
            onClick={navigateToSearchEdu}
            style={{ width: '500px', height: '500px' }}
          >
            <img
              src="/educationButton2.png"
              style={{
                width: '100%',
                height: '100%',
                maskImage: 'linear-gradient(to bottom, transparent, transparent 10%, black 90%, black)',
              }}
            />
            <span style={{fontSize: '35px', fontWeight: 'bold', marginTop:'-30px'}}> 교육용 드론</span>
          </button>
          <button
            type="button"
            className="btm_image"
            onClick={navigateToSearchToy}
            style={{ marginLeft: '160px', marginTop: '300px', width: '500px', height: '500px' }}
          >
            <img
              src="/toyButton2.png"
              style={{
                width: '100%',
                height: '100%',
                maskImage: 'linear-gradient(to bottom, transparent, transparent 10%, black 90%, black)',
              }}
            />
            <span style={{fontSize: '35px', fontWeight: 'bold', marginTop:'-30px'}}> 완구용 드론</span>
          </button>
          <button
            type="button"
            className="btm_image"
            onClick={navigateToSearchTransport}
            style={{ marginLeft: '210px', width: '500px', height: '500px' }}
          >
            <img
              src="/deliverButton2.png"
              style={{
                width: '100%',
                height: '100%',
                maskImage: 'linear-gradient(to bottom, transparent, transparent 10%, black 90%, black)',
              }}
            />
            <span style={{fontSize: '35px', fontWeight: 'bold', marginTop:'-30px'}}> 운송용 드론</span>
          </button>
          <button
            type="button"
            className={`btm_image ${isButtonClicked ? 'darken' : ''}`}
            onClick={navigateToSearchFarm}
            style={{ marginLeft: '210px', width: '500px', height: '500px' }}
          >
            <img
              src="/farmButton2.png"
              style={{
                width: '100%',
                height: '100%',
                maskImage: 'linear-gradient(to bottom, transparent, transparent 10%, black 90%, black)',
              }}
              alt="Farm Button"
            />

          <span style={{fontSize: '35px', fontWeight: 'bold', marginTop:'-30px'}}> 농업용 드론</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageDrone;