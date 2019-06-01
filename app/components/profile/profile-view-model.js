'use strict';
const Observable = require('data/observable').Observable;
const ViewModel = new Observable({
    listItems: []
});
module.exports = ViewModel;