import { connect } from 'react-redux'
import { requestAllUsers } from '../../actions/users'
import { requestAllFollows } from '../../actions/follows'
import { selectFollowing } from '../../reducers/selectors'
// import { clearErrors } from '../../actions/session'
import FollowingIndex from './following_index'

const mapStateToProps = (state, ownProps) => ({
    following: selectFollowing(state, state.session.id),
    currentUserId: state.session.id,
    text: "Following"
    // errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    requestAllUsers: () => dispatch(requestAllUsers()),
    requestAllFollows: () => dispatch(requestAllFollows())
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);