
const formatter = Intl.NumberFormat('en', { notation: 'compact' });
export const convertNumber = (number: number) => {
  return formatter.format(number);
};

export const CHART_VIEW = {
  VOLUME: 'Volume',
  LIQUIDITY: 'Liquidity',
  RATE0: 'Rate 0',
  RATE1: 'Rate 1',
}

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

export const toNiceDate = (date: number) => {
  const x = new Date(date * 1000).toUTCString().split(' ').slice(1, 3).join(' ');
  return x;
};

export const toK = (num: any) => {
  if (num < 1) {
    return num;
  }

  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'k';
  }

  return num.toString();
};

export const toNiceDateYear = (date: number) => {
  const formattedDate = new Date(date * 1000).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });

  return formattedDate;
};
export const formatDollarAmount = (num: number | bigint, digits: number) => {
  const formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })
  return formatter.format(num)
}

export const getTimeframe = (timeWindow: any) => {
  const utcEndTime = new Date();
  let utcStartTime;

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
}

export const formattedNum = (number: any, usd = false, acceptNegatives = false) => {
  // @ts-ignore
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '$0' : 0
  }
  let num = parseFloat(number)

  if (num > 500000000) {
    return (usd ? '$' : '') + toK(num.toFixed(0))
  }

  if (num === 0) {
    if (usd) {
      return '$0'
    }
    return 0
  }

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001'
  }

  if (num > 1000) {
    // @ts-ignore
    return usd ? formatDollarAmount(num, 0) : Number(parseFloat(num).toFixed(0)).toLocaleString()
  }

  if (usd) {
    if (num < 0.1) {
      return formatDollarAmount(num, 4)
    } else {
      return formatDollarAmount(num, 2)
    }
  }
  // @ts-ignore
  return Number(parseFloat(num).toFixed(4)).toString()
}
