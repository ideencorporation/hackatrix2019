const nav = require('~/common/nav');
const ls = require('~/common/ls');
exports.loaded = function () {
	nav.goTo('welcome/welcome', true);
}