System.register(['angular2/upgrade', './components/hello'], function(exports_1) {
    "use strict";
    var upgrade_1, hello_1;
    var upgradeAdapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (hello_1_1) {
                hello_1 = hello_1_1;
            }],
        execute: function() {
            upgradeAdapter = new upgrade_1.UpgradeAdapter();
            angular.module('codecraft').directive('helloWorld', upgradeAdapter.downgradeNg2Component(hello_1.HelloWorld));
            upgradeAdapter.bootstrap(document.body, ['codecraft'], { strictDi: false });
        }
    }
});
//# sourceMappingURL=app.js.map