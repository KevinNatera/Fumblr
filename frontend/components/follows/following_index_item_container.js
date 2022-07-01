import { connect } from 'react-redux'
import { deleteFollow} from '../../actions/follows'
import { selectFollowing, selectAllUsers } from '../../reducers/selectors'
// import { clearErrors } from '../../actions/session'
import FollowingIndexItem from './following_index_item'

const mapStateToProps = (state, ownProps) => ({
    following: selectFollowing(state, state.session.id),
    users: selectAllUsers(state),
    currentUserId: state.session.id
    // errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteFollow: (followId) => dispatch(deleteFollow(followId))
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndexItem);