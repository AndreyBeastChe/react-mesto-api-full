const allowedCors = [
  'https://vse-na-meste.nomoredomains.xyz',
  'http://vse-na-meste.nomoredomains.xyz',
  'https://api.vse-na-meste.nomoredomains.xyz',
  'http://api.vse-na-meste.nomoredomains.xyz',
  'localhost:3000'
];

module.exporg(function(req, res, next) {
    const { origin } = req.headers; // Сохраняем источник запроса в переменную origin
    // проверяем, что источник запроса есть среди разрешённых 
    if (allowedCors.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
  
    next();
  });

const { method } = req; // Сохраняем тип запроса (HTTP-метод) в соответствующую переменную

// Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE"; 

// Если это предварительный запрос, добавляем нужные заголовки
if (method === 'OPTIONS') {
    // разрешаем кросс-доменные запросы любых типов (по умолчанию) 
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    return res.end();
} 