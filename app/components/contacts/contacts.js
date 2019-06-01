const ViewModel = require('./contacts-view-model');

const nav = require('~/common/nav');
const ls = require('~/common/ls');
const message = require('~/common/message');

const listViewModule = require("ui/list-view");

let page;
exports.loaded = function (args) {
    page = args.object;
    ViewModel.set('title','Alerssis');
    getData();
    // setSearch();
    page.bindingContext = ViewModel;
}
exports.tapBack = function () {
    nav.goBack();
}
exports.tapOptions = function () {
    ls.setBool('clear', false);
    nav.goTo('periods/periods', false);
}
function navToDetails(item) {
    console.dir(item);
    nav.goTo('contacts/details/details', false, item);
}
exports.itemTap = function (args) {
    const listView = ViewModel.get('listView')[args.index];
    navToDetails(listView);
}
function getData() {
    let sbText = (ViewModel.get('sbText') ? ViewModel.get('sbText') : '');
    var listView = [
        {  
            'address': 'Local Cafeteria',
            'status': 'Disponible',
            'name': 'Adm. Bernabe '
        },
        {  
            'address': 'Restaurante French',
            'status': 'No disponible',
            'name': 'Sr. Hernandez'
        },
        {  
            'address': 'Salon Spa',
            'status': 'Disponible',
            'name': 'Sr. Elizabeth Fernandez'
        },
        {  
            'address': 'Clinica Peruanita',
            'status': 'Disponible',
            'name': 'Dr. Echevarria'
        },
        {  
            'address': 'Tienda Central',
            'status': 'Disponible',
            'name': 'Adm. Sofia Loayza '
        },
        {  
            'address': 'Residencial Rodriguez',
            'status': 'Disponible',
            'name': 'Sr. Hernan Rodriguez'
        },
        {  
            'address': 'Productora Muebles',
            'status': 'Disponible',
            'name': 'Jefe Santillana'
        },
        {  
            'address': 'Parque la Innovacion',
            'status': 'Disponible',
            'name': 'Alc. Parra Jara'
        }
    ];

    for(let i = 0; i<listView.length; i++){
        listView[i].letter = listView[i].name.charAt(0);
        listView[i].id = i+1;
    }
    ViewModel.set('listView', listView);
}
function hideKeyBoard() {
    const searchBar = page.getViewById('searchBar');
    if (searchBar.ios) {
        searchBar.ios.endEditing(true);
    } else if (searchBar.android) {
        searchBar.android.clearFocus();
    }
}
function setSearch() {
    hideKeyBoard();
    let timer = 0;
    ViewModel.set("sbHint", "Search"); // by campaign, operation or advertiser
    // ViewModel.set("sbText", "");
    const Observable = require('data/observable').Observable;
    ViewModel.on(Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "sbText") {
            //console.log("SearchBar text changed! New value: ", propertyChangeData.value);
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                ViewModel.set('offset', undefined);
                ViewModel.set('last_page', undefined);
                getData();
                timer = 0;
            }, 500);
        }
    });
}
