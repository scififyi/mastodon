import loadPolyfills from 'flavours/scifi/util/load_polyfills';

function loaded() {
  const TimelineContainer = require('flavours/scifi/containers/timeline_container').default;
  const React             = require('react');
  const ReactDOM          = require('react-dom');
  const mountNode         = document.getElementById('mastodon-timeline');

  if (mountNode !== null) {
    const props = JSON.parse(mountNode.getAttribute('data-props'));
    ReactDOM.render(<TimelineContainer {...props} />, mountNode);
  }
}

function main() {
  const ready = require('flavours/scifi/util/ready').default;
  ready(loaded);
}

loadPolyfills().then(main).catch(error => {
  console.error(error);
});
