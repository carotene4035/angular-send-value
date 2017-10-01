import { Component, OnInit } from '@angular/core';
import { SendValueService } from '../send-value.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit {

  constructor(
    private sendValueService :SendValueService
  ) { }

  ngOnInit() {
  }

  onClick() :void
  {
    this.sendValueService.sendMessageToCompB('こんにちは！');
  }

}
