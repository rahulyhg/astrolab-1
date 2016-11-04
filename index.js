const signs = require('./data');

const astrolab = query => {
  if (query === undefined) {
    const today = new Date();
    let sign;
    signs.map(x => {
      let startDate = new Date(`${x.startDate.month} ${x.startDate.day}, ${today.getFullYear()}`);
      let endDate = new Date(`${x.endDate.month} ${x.endDate.day}, ${today.getFullYear()}`);
      if (startDate <= today && endDate >= today) sign = x;      
    });
    return Object.freeze(sign);
  } else {
    let queryCleaned = query.trim().toLowerCase();
    let sign = signs.filter(x => x.sign.toLowerCase() === queryCleaned)[0];
    if (sign === undefined) {
      console.log('Please pass a valid zodiac sign as an argument.');
    } else {
      return Object.freeze(sign);
    }
  }
}

module.exports = astrolab;
