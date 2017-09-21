import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userData;
  constructor(private api: ApiService) {  }

  public login(ID, password): Promise<any> {
    return this.api.authenticateUser(ID, password).then(function(user){
      this.userData = user;
    }.bind(this));
  }
  public getUser() {
    return this.userData;
  }
}
