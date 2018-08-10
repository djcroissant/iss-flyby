import React from 'react';

// Import components
import PageInfo from './PageInfo.js';

// Import containers
import LocationContainer from '../containers/LocationContainer.js';
import TimeContainer from '../containers/TimeContainer.js';
import FlybyTableContainer from '../containers/FlybyTableContainer.js';
import SubmitContainer from '../containers/SubmitContainer.js';

// Import CSS
import '../assets/css/App.css';
import '../assets/css/html5up.css';

const HomeWrapper = () => (
  <div>
    <PageInfo />
    <LocationContainer />
    <TimeContainer />
    <SubmitContainer />
    <FlybyTableContainer />
  </div>
)

export default HomeWrapper