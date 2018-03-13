const getTime = (start, end) => `${ ((end - start) / 1000).toFixed(2)}s`;

exports.getPass = data => ({
  ...data,
  state: 'PASS',
  time: getTime(data.start, data.end),
  details: 'Successful'
})

exports.getFail = data => ({
  ...data,
  state: 'FAIL',
  time: getTime(data.start, data.end),
  details: data.details
})