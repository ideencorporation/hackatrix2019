const ViewModel = require("./login-view-model");
const nav = require('~/common/nav');
let page;
exports.onNavigatingTo = function (args) {
    page = args.object;
    page.bindingContext = ViewModel;
}
exports.tapLogin = function () {
    nav.goTo('contacts/contacts', true);
}