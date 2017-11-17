import loadPolyfills from '../../mastodon/load_polyfills';

// import default stylesheet with variables
require('font-awesome/css/font-awesome.css');

import '../../styles/scifi-autumn.scss';

require.context('../../images/', true);

loadPolyfills().then(() => {
  require('../../mastodon/main').default();
}).catch(e => {
  console.error(e);
});
