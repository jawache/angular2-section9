import {UpgradeAdapter} from 'angular2/upgrade';
import {HelloWorld} from './components/hello';

declare var angular:any;

const upgradeAdapter:UpgradeAdapter = new UpgradeAdapter();




angular.module('codecraft').directive('helloWorld', upgradeAdapter.downgradeNg2Component(HelloWorld));

upgradeAdapter.bootstrap(document.body, ['codecraft'], {strictDi: false});


