import { connect } from 'react-redux'
import Home from '../components/home/Home'
import { bindActionCreators } from 'redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../actions'
import { push } from 'connected-react-router'
import { ABOUT_PAGE_URL } from '../constants/url'

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      linkToAboutPage: () => push(ABOUT_PAGE_URL)
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
