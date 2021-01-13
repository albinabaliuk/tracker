import { connect } from 'react-redux'
import Dashboard from '../components'


const mapStateToProps = state => ({
  activities: state.tracker.activities
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
