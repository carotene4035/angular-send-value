import { Component, OnInit } from '@angular/core';
import { SendValueService } from '../send-value.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {

  private subscription: Subscription;

  constructor(
    private sendValueService :SendValueService
  ) {

  }

  ngOnInit() {
    this.subscription = this.sendValueService.toCompBDaTa$.subscribe(
      msg => {
        console.log('compBは' + msg + 'をうけとりました。')
      });
  }

}
