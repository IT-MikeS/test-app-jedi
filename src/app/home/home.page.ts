import { Component } from '@angular/core';
import { Tester } from 'tester-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public testEcho() {
    this.doAThing();
  }

  async doAThing() {
    // const Tester = (window as any).Tester as TesterPlugin;
    console.log(await Tester.echo({value: 'HELLO TESTER!'}));
  }

}
