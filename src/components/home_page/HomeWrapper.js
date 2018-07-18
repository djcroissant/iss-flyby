import React from 'react'

// Import components
import PageInfo from './components/PageInfo.js'
import Location from './components/Location.js'
import Time from './components/Time.js'
import Submit from './components/Submit.js'

// Import containers
import FlybyTable from '../containers/FlybyTable.js'

// Import CSS
import '../assets/css/App.css'
import '../assets/css/html5up.css'
import '../assets/css/react-select.css'
​
const HomeWrapper = () => (
  <div>
    <PageInfo />
    <Location />
    <Time />
    <Submit />
    <FlybyTable />
  </div>
)
​
export default HomeWrapper