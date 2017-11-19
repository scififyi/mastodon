import { connect } from 'react-redux';
import { cancelReplyCompose } from 'themes/glitch/actions/compose';
import { makeGetStatus } from 'themes/glitch/selectors';
import ReplyIndicator from '../components/reply_indicator';

const makeMapStateToProps = () => {
  const getStatus = makeGetStatus();

  const mapStateToProps = state => ({
    status: getStatus(state, state.getIn(['compose', 'in_reply_to'])),
  });

  return mapStateToProps;
};

const mapDispatchToProps = dispatch => ({

  onCancel () {
    dispatch(cancelReplyCompose());
  },

});

export default connect(makeMapStateToProps, mapDispatchToProps)(ReplyIndicator);
