import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SendValueService {

  constructor() { }

  /** compBに伝えるための口 */
  private toCompBDataSource = new Subject<string>();

  /** compBに取り付ける耳 */
  public toCompBDaTa$       = this.toCompBDataSource.asObservable();

  public sendMessageToCompB(msg)
  {
    this.toCompBDataSource.next(msg);
  }

}
