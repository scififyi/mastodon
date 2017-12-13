import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import configureStore from 'flavours/scifi/store/configureStore';
import { hydrateStore } from 'flavours/scifi/actions/store';
import { IntlProvider, addLocaleData } from 'react-intl';
import { getLocale } from 'mastodon/locales';
import PublicTimeline from 'flavours/scifi/features/standalone/public_timeline';
import HashtagTimeline from 'flavours/scifi/features/standalone/hashtag_timeline';
import initialState from 'flavours/scifi/util/initial_state';

const { localeData, messages } = getLocale();
addLocaleData(localeData);

const store = configureStore();

if (initialState) {
  store.dispatch(hydrateStore(initialState));
}

export default class TimelineContainer extends React.PureComponent {

  static propTypes = {
    locale: PropTypes.string.isRequired,
    hashtag: PropTypes.string,
  };

  render () {
    const { locale, hashtag } = this.props;

    let timeline;

    if (hashtag) {
      timeline = <HashtagTimeline hashtag={hashtag} />;
    } else {
      timeline = <PublicTimeline />;
    }

    return (
      <IntlProvider locale={locale} messages={messages}>
        <Provider store={store}>
          {timeline}
        </Provider>
      </IntlProvider>
    );
  }

}
