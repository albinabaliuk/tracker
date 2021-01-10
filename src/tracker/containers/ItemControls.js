import { connect } from 'react-redux'
import ItemControls from '../components/ItemControls'
import * as Actions from '../state/actions/tracker'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  startActivity: index => () => dispatch(Actions.startActivity(index)),
  endActivity: index => () => dispatch(Actions.endActivity(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemControls)
