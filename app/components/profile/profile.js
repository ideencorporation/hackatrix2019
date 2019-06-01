const ViewModel = require('./profile-view-model');

const nav = require('~/common/nav');

let page;
exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = ViewModel;
}
exports.tapBack = function () {
    nav.goBack();
}