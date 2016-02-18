 import {UpgradeAdapter} from 'angular2/upgrade';

 //declare var angular:any;

 const upgradeAdapter: UpgradeAdapter = new UpgradeAdapter();

 //angular.module('angular-legacy').directive('algorithms',adapter.downgradeNg2Component(Algorithms));

 upgradeAdapter.bootstrap(document.body, ['codecraft'], {strictDi: false});


