import { Component, OnInit } from '@angular/core';
import { MyLibService } from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: [],
  providers: [MyLibService]
})
export class MyLibComponent implements OnInit {

  constructor(svc: MyLibService) { 
    console.debug('id', svc.id);
  }

  ngOnInit() {
  }

}
