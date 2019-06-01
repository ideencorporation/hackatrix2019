const ViewModel = require("./details-view-model");

const nav = require('~/common/nav');
const ls = require('~/common/ls');
const SocialShare = require('nativescript-social-share');

exports.navigatingTo = function (args) {
    const page = args.object;
    const item = page.navigationContext;
    for (const i in item) {
        ViewModel.set(i, item[i]);
    }
    ViewModel.set('width', 100);
    ViewModel.set('height', 200);
    ViewModel.set('url_stream', "https://5a8d73edc0407.streamlock.net:443/doohsip/invianip01.stream/playlist.m3u8");
    page.bindingContext = ViewModel;
}
exports.tapBack = function () {
    nav.goBack();
}
exports.tapShared = function () {
    let captured_at = ViewModel.get('created_at');
    captured_at = captured_at.split(' ');
    SocialShare.shareText(
        '*Campaña: ' + ViewModel.get('campaign').name + '*\n' +
        'Versión: ' + ViewModel.get('version').description + '\n' +
        'Elemento: ' + ViewModel.get('type_unit').name + ' (' + ViewModel.get('type_measure') + ')' + '\n' +
        'Fecha: ' + captured_at[0] + '\n' +
        'Hora: ' + captured_at[1] + '\n\n' + 
        ViewModel.get('image_url_XL').replace('_XL.jpeg', '.jpeg')
    );
}