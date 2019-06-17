const config = require('./config');
const my_module = require('./module');

module.exports = my_module(config.get('name'));
