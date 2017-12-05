import { connect } from 'react-redux';
import IntersectionObserverArticle from 'themes/glitch/components/intersection_observer_article';
import { setHeight } from 'themes/glitch/actions/height_cache';

const makeMapStateToProps = (state, props) => ({
  cachedHeight: state.getIn(['height_cache', props.saveHeightKey, props.id]),
});

const mapDispatchToProps = (dispatch) => ({

  onHeightChange (key, id, height) {
    dispatch(setHeight(key, id, height));
  },

});

export default connect(makeMapStateToProps, mapDispatchToProps)(IntersectionObserverArticle);
