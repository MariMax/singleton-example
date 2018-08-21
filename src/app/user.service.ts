import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private counter = 0;

  public getCounter() {
    return ++this.counter;
  }
}
