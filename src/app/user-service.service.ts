import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private isUserLoggedIn;
  private email;
  constructor() { 
this.isUserLoggedIn=false; // route will not activate bydefault
  }
  // If user login then route will be shown and the componenmt content will be seen by setting  'isUserLoggedIn=true'
  setUserLoggedIn()
  {
    this.isUserLoggedIn=true;
  }
  getUserLoggedIn()
  {
    return this.isUserLoggedIn;
  }
}
