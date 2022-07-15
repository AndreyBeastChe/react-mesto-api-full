const allowedCors = [
  'https://vse-na-meste.nomoredomains.xyz',
  'http://vse-na-meste.nomoredomains.xyz',
  'https://api.vse-na-meste.nomoredomains.xyz',
  'http://api.vse-na-meste.nomoredomains.xyz',
  'localhost:3000',
  'https://localhost:3000',
  'vse-na-meste.nomoredomains.xyz',
  'https://api.vse-na-meste.nomoredomains.xyz/signup'
];

module.exports = ((req, res, next) => {
    const { origin } = req.headers;
    const { method } = req;
  
    const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
    const requestHeaders = req.headers['access-control-request-headers'];
  
    if (allowedCors.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Credentials', true);
    }
    if (method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', requestHeaders);
      res.status(200).send();
      return;
    }
    next();
  });