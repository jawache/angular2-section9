System.register(['angular2/upgrade', "angular2/core"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var upgrade_1, core_1;
    var upgradeAdapter, HelloWorld;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            upgradeAdapter = new upgrade_1.UpgradeAdapter();
            HelloWorld = (function () {
                function HelloWorld() {
                }
                HelloWorld = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "\n  <div>\n    Hello world\n  </div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorld);
                return HelloWorld;
            }());
            exports_1("HelloWorld", HelloWorld);
            angular.module('codecraft').directive('helloWorld', upgradeAdapter.downgradeNg2Component(HelloWorld));
            upgradeAdapter.bootstrap(document.body, ['codecraft'], { strictDi: false });
        }
    }
});
//# sourceMappingURL=app.js.map