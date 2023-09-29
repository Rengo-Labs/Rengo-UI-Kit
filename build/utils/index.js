import humanFormat from "human-format";
var formatter = Intl.NumberFormat('en', {
  notation: 'compact'
});
export var convertNumber = function convertNumber(number) {
  return formatter.format(number);
};
export var CHART_VIEW = {
  VOLUME: 'Volume',
  LIQUIDITY: 'Liquidity',
  RATE0: 'Rate 0',
  RATE1: 'Rate 1'
};
export var timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time'
};
export var toNiceDate = function toNiceDate(date) {
  var x = new Date(date * 1000).toUTCString().split(' ').slice(1, 3).join(' ');
  return x;
};
export var toK = function toK(num) {
  if (num < 1) {
    return num;
  }
  if (num >= 1000) {
    return humanFormat(num, {
      maxDecimals: 3
    });
  }
  return num.toString();
};
export var toNiceDateYear = function toNiceDateYear(date) {
  var formattedDate = new Date(date * 1000).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });
  return formattedDate;
};
export var formatDollarAmount = function formatDollarAmount(num, digits) {
  var formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
  return formatter.format(num);
};
export var getTimeframe = function getTimeframe(timeWindow) {
  var utcEndTime = new Date();
  var utcStartTime;
  switch (timeWindow) {
    case timeframeOptions.WEEK:
      utcStartTime = utcEndTime.getTime() - 7 * 24 * 60 * 60 * 1000 - 1;
      break;
    case timeframeOptions.MONTH:
      utcStartTime = utcEndTime.getTime() - 30 * 24 * 60 * 60 * 1000 - 1;
      break;
    case timeframeOptions.ALL_TIME:
      utcStartTime = utcEndTime.getTime() - 365 * 24 * 60 * 60 * 1000 - 1;
      break;
    default:
      utcStartTime = utcEndTime.getTime() - 365 * 24 * 60 * 60 * 1000 - 1;
      break;
  }
  return Math.floor(utcStartTime / 1000);
};
export var formattedNum = function formattedNum(number) {
  var usd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var acceptNegatives = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // @ts-ignore
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '$0' : 0;
  }
  var num = parseFloat(number);
  if (num > 500000000) {
    return (usd ? '$' : '') + toK(num);
  }
  if (num === 0) {
    if (usd) {
      return '$0';
    }
    return 0;
  }
  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001';
  }
  if (num > 1000) {
    // @ts-ignore
    return usd ? formatDollarAmount(num, 0) : Number(parseFloat(num).toFixed(0)).toLocaleString();
  }
  if (usd) {
    if (num < 0.1) {
      return formatDollarAmount(num, 4);
    } else {
      return formatDollarAmount(num, 2);
    }
  }
  // @ts-ignore
  return Number(parseFloat(num).toFixed(4)).toString();
};