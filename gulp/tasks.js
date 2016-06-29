/**
 * Created by ljeff on 6/28/16.
 */
export default {
  all: 'all',
  preCache: 'pre-cache',
  concatJS: 'concat-js',
  minifyJS: 'minify-js',
  bundle: 'bundle'
};

const uglifyOptions = {mangle: {screw_ie8: false, keep_fnames: true}};
export {uglifyOptions};