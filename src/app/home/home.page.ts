import { Component } from '@angular/core';
import type { TesterPlugin } from 'tester-plugin';

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
    const tester = (window as any).Tester as TesterPlugin;
    console.log(await tester.echo({value: 'HELLO TESTER!'}));
  }

}
