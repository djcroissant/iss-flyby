import { connect } from 'react-redux'
import FlybyTableComponent from '../components/FlybyTable.js'
​
const mapStateToProps = (state) => {
    return {
        flybys: state.home.flybys
    }
}
​
const FlybyTable = connect(
    mapStateToProps
)(FlybyTableComponent)
​
export default FlybyTable