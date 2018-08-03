import React from 'react';

// Import components
import PageInfo from './components/PageInfo.js';
import Time from './components/Time.js';
import Map from './components/Map.js';

// Import containers
import LocationContainer from './containers/LocationContainer.js';
import FlybyTableContainer from './containers/FlybyTableContainer.js';
import SubmitContainer from './containers/SubmitContainer.js';

// Import CSS
import '../../assets/css/App.css';
import '../../assets/css/html5up.css';
import '../../assets/css/react-select.css';

const HomeWrapper = () => (
  <div>
    <PageInfo />
    <LocationContainer />
    <Time />
    <SubmitContainer />
    <FlybyTableContainer />
  </div>
)

export default HomeWrapper