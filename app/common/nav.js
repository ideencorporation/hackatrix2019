const frameModule = require('ui/frame');
exports.goBack = function () {
    const topmost = frameModule.topmost();
    topmost.goBack();
}
function goToFunc(pagina, history, item) {
    console.log('goto: ' + 'components/' + pagina);
    const topmost = frameModule.topmost();
    topmost.navigate({
        moduleName: './components/' + pagina,
        clearHistory: history,
        context: item
    });
}
exports.goTo = function (pagina, history, item) {
    goToFunc(pagina, history, item);
}
exports.getCurrentPage = function () {
    const myPage = frameModule.topmost().currentPage;
    return myPage.id;
}