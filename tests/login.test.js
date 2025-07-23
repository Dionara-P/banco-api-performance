import http from 'k6/http'; // Import the http module to make HTTP requests 
import { sleep, check } from 'k6'; 
import { pegarBaseURL } from '../utils/variaveis.js';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
  /*
  stages: [
    {duration: '10s', target: 10},
    {duration: '20s', target: 10},
    {duration: '10s', target: 30},
    {duration: '20s', target: 30},
    {duration: '20s', target: 0}
  ], */
  iterations: 1,
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<6000'],
    http_req_failed: ['rate<0.01']
  }
};

export default function () {
  const url = pegarBaseURL() + '/login';

  const payload = JSON.stringify(postLogin);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const res = http.post(url, payload, params);

  check(res, {
    'Validar que o status é 200': (r) => r.status === 200,
    'Validar que o token é string': (r) => typeof(r.json().token) == 'string'
  })

  sleep(1);
}