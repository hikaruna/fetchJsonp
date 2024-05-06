import jsonp from 'https://esm.run/jsonp';

/**
 * jsonpに対応したURLを指定してfetchし、jsonデータを取得します
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
