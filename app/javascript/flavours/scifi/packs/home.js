import loadPolyfills from 'flavours/scifi/util/load_polyfills';

loadPolyfills().then(() => {
  require('flavours/scifi/util/main').default();
}).catch(e => {
  console.error(e);
});
