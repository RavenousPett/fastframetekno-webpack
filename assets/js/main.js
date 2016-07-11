// Require bootstrap 3 http://bline.github.io/bootstrap-webpack-example
require('bootstrap-loader');

// Custom styles
require('../css/style.scss');

var $ = require('jquery');
$('#target').html('hello the world!');
