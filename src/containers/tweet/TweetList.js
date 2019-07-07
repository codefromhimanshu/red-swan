import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TweetList from '../../components/tweet/TweetList'
import { requestTweetList } from '../../actions'

function mapStateToProps(state) {
  return {
    tweetList: state.tweets.tweetList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestTweetList
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList)
