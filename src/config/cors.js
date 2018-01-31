module.exports = function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'GET, POST, OPTIONS, PATCH, DELETE');
  res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}
