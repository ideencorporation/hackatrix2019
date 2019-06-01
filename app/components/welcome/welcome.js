const ViewModel = require("./welcome-view-model");
const enums = require("ui/enums");

const nav = require('~/common/nav');
const platform = require('~/common/platform');

exports.navigatingTo = function (args) {
    const page = args.object;
    page.bindingContext = ViewModel;

    const width = platform.getScreenDimensions('width') * 0.8;
    ViewModel.set('loaded', true);
    ViewModel.set('width', width);
    page.getViewById('btn').scaleX = 1;
    page.getViewById('btn').scaleY = 1;
    page.getViewById('btn').translateX = 0;
    page.getViewById('btn').translateY = 0;
    page.getViewById('btn').width = width;
    page.getViewById('btn').text = 'Login';
}
exports.tapLogin = function (args) {
    if (ViewModel.get('loaded')) {
        ViewModel.set('loaded', false);
        const btn = args.object;
        btn.text = "";
        btn.width = 50;
        btn.height = 50;
        btn.boderRadius = 50;
        btn.animate({
            opacity: 0.5,
            translate: { x: 0, y: ViewModel.get('width') * (-1) },
            scale: { x: 5, y: 5 },
            rotate: 360,
            duration: 300,
            delay: 20,
            iterations: 1,
            curve: enums.AnimationCurve.easeIn
        })
            .then(() => {
                return btn.animate({
                    opacity: 1,
                    translate: { x: 0, y: ViewModel.get('width') * (-1) },
                    scale: { x: 30, y: 30 },
                    rotate: 360,
                    duration: 300,
                    delay: 20,
                    iterations: 1,
                    curve: enums.AnimationCurve.easeOut
                });
            })
            .then(() => {
                console.log("Animation finished.");
                nav.goTo('login/login', false);
            }).catch((e) => {
                console.log(e.message);
            });
    }
} 