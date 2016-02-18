import {UpgradeAdapter} from 'angular2/upgrade';
import {Component} from "angular2/core";

declare var angular:any;

const upgradeAdapter:UpgradeAdapter = new UpgradeAdapter();


@Component({
    selector: 'hello-world',
    template: `
  <div>
    Hello world
  </div>
`
})
export class HelloWorld {

}

angular.module('codecraft').directive('helloWorld', upgradeAdapter.downgradeNg2Component(HelloWorld));

upgradeAdapter.bootstrap(document.body, ['codecraft'], {strictDi: false});


