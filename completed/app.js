System.register(['angular2/upgrade'], function(exports_1) {
    var upgrade_1;
    var upgradeAdapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            }],
        execute: function() {
            upgradeAdapter = new upgrade_1.UpgradeAdapter();
            upgradeAdapter.bootstrap(document.body, ['codecraft'], { strictDi: false });
        }
    }
});
//# sourceMappingURL=app.js.map