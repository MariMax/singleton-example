import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static _instance: UserService;
  private counter = 0;
  constructor() { 
    if (UserService._instance) return UserService._instance;
    UserService._instance = this;
  }

  public getCounter() {
    return ++this.counter;
  }
}
