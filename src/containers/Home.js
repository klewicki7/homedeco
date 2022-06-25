import { connect } from "react-redux";
import actions from '../redux/actions/auth'
import HomeScreen from '../screens/Home'

const mapStateToProps = (state) => ({
    
})
const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)