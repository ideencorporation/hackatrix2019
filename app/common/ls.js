const appSettings = require("application-settings");
exports.setString = function (name, value) {
    appSettings.setString(name, value);
}
exports.getString = function (name) {
    return appSettings.getString(name);
}
exports.setJson = function (name, value) {
    appSettings.setString(name, JSON.stringify(value));
    return true;
}
exports.getJson = function (name) {
    const listView = appSettings.getString(name);
    return listView ? JSON.parse(listView) : null;
}
exports.setNumber = function (name, value) {
    appSettings.setNumber(name, value);
}
exports.getNumber = function (name) {
    return appSettings.getNumber(name);
}
exports.setBool = function (name, value) {
    appSettings.setBoolean(name, value);
}
exports.getBool = function (name) {
    return appSettings.getBoolean(name);
}
exports.remove = function (name) {
    return appSettings.remove(name);
}
exports.clear = function () {
    return appSettings.clear();
}