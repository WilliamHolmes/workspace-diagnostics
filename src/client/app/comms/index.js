import { saveAs } from 'filesaver.js';

import moment from 'moment';
import _ from 'underscore';

const date = moment().format('YYYYMMDD[-]HHMMSS');
const fileName = `WW_Diagnotics_Results_${date}.json`;

const checkStatus = (res = {}) => {
  if (res.status === 200) {
    return Promise.resolve();
  } else {
    return Promise.reject('Connection Issue');
  }
};

exports.doDownload2 = body => {
  const file = new Blob([body], {type: "text/plain;charset=utf-8"});
  saveAs(file, fileName);
}

exports.doDownload = body => {
    var blob = new Blob([body], {type: "text/plain;charset=utf-8"});
    saveAs(blob, fileName);
}

const doXHR = data => {
  const {
    body,
    method = 'GET',
    url,
    headers = {}
  } = data;
  return fetch(url, {
    body,
    method,
    headers,
    cache: 'no-store',
    credentials: 'same-origin'
  }).then(checkStatus)
};

const doIMG = data => {
  return new Promise((resolve, reject) => {
    const { url } = data;
    const img = document.createElement('img');
    img.onload = () => resolve();
    img.onerror = err => reject(err);
    img.src = `${url}?nocache=${_.now()}`
  });
};

const doSCRIPT = data => {
  return new Promise((resolve, reject) => {
    const { url } = data;
    const script = document.createElement('script');
    script.onload = () => resolve();
    script.onerror = err => reject(err);
    script.src = url;
    document.body.appendChild(script);
  });
};

const doWEBSOCKET = data => {
  return new Promise((resolve, reject) => {
    const { url } = data;
    const ws = new WebSocket(url);
    ws.onopen = () => {
      ws.close();
      resolve();
    }
    ws.onerror = err => {
      ws.close();
      reject('The connection was closed abnormally.')
    };
  });
};


const processData = data => {
  const { transport } = { ...data };
  switch (transport) {
    case 'XHR':
      return doXHR(data);
    case 'IMG':
      return doIMG(data);
    case 'SCRIPT':
      return doSCRIPT(data);
    case 'WEBSOCKET':
      return doWEBSOCKET(data);
    default:
      return Promise.reject();
  }
};

const getDetails = res => {
  if (_.isString(res)) {
    return res;
  }
  return (res || '').toString()
}

export default data => {
  data.start = _.now();
  return processData(data)
  .then(res => ({
    end: _.now(),
    details: getDetails(res),
    ...data
  }))
  .catch(err => Promise.reject({
    end: _.now(),
    details: getDetails(err),
    ...data
  }))
}