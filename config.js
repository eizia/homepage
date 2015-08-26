var config = {};
var dev = "__development__";
// var dev = "production";

/*
  en = english
  cs = chinese simplified
*/
var language = "cs";

if(dev.indexOf("development") != -1) {
  config = {
      baseUrl: "http://localhost:4001",
      mongoURL: 'mongodb://localhost',
      language: language,
      port: 4001
  };
} else {
  process.env.NODE_ENV = 'production';
  config = {
      baseUrl: "http://www.inact-studio.com",
      mongoURL: 'mongodb://localhost',
      language: language,
      port: 8080
  };

}

module.exports = config;
