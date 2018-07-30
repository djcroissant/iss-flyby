import React from 'react';

// Import components
import PageInfo from './components/PageInfo.js';
import Time from './components/Time.js';

// Import containers
import Location from './containers/Location.js';
import FlybyTable from './containers/FlybyTable.js';
import Submit from './containers/Submit.js';

// Import CSS
import '../../assets/css/App.css';
import '../../assets/css/html5up.css';
import '../../assets/css/react-select.css';

const HomeWrapper = () => (
  <div>
    <PageInfo />
    <Location />
    <Time />
    <Submit />
    <FlybyTable />
  </div>
)

export default HomeWrapper