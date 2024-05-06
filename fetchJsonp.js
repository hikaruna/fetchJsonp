import jsonp from 'https://esm.run/jsonp';

/**
 * jsonpに対応したURLを指定してfetchし、jsonデータを取得します
 * 
 * 動作は https://github.com/webmodules/jsonp に準じます
 * 
 * Usage:
 * import fetchJsonp from 'https://cdn.jsdelivr.net/gh/hikaruna/fetchJsonp/fetchJsonp.js';
 * try {
 * const jsonData = await fetchJsonp('https://example.com/jsonp_endpoint');
 * } catch (err) { }
 * 
 * @param url {string}
 * @returns {Promise<object>} fetched json data.
 */
const fetchJsonp = (url) => {
  return new Promise((resolve, reject) => {
    jsonp(url, undefined, (err, data) => {
      if (err != null) {
        reject(err);
        return;
      }
      resolve(data);
    });
  })
}

export default fetchJsonp;
