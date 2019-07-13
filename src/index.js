export default (obj) => {
  let parts = [];
  for (let i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i) && typeof obj[i] !== 'undefined') {
      parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
    }
  }
  return parts.join('&');
};
