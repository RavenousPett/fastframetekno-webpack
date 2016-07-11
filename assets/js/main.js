// Require bootstrap 3 http://bline.github.io/bootstrap-webpack-example
require('bootstrap-loader');

var $ = require('jquery');
$('#target').html('hello the world!');
require('../css/style.scss');
