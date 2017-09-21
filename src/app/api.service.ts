import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(private http: Http) {

  }

  public authenticateUser(ID, password): Promise<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      this.http.get('/api/get-users?ID=' + ID + '&password=' + password).subscribe(
        (res: Response) => {
          const result = res.json();
          resolve(result);
          reject({invalid: 'Get request Failed'});
        },
        (err) => {
          reject({invalid: 'bad'});
        }
      );
    });
    return promise;
  }
}
