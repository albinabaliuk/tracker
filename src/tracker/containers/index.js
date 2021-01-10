import { connect } from 'react-redux'
import Tracker from '../components'
import * as Actions from '../state/actions/tracker'

const mapStateToProps = state => ({
  activities: state.tracker.activities
})

const mapDispatchToProps = dispatch => ({
  addActivity: title => dispatch(Actions.addActivity(title)),
  startActivity: index => () => dispatch(Actions.startActivity(index)),
  endActivity: index => () => dispatch(Actions.endActivity(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tracker)
