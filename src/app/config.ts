import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {

    data: Object[];
   }

  configUrl = 'assets/config.json';

getConfig() {

  return  this.http.get('http://dummy.restapiexample.com/api/v1/employees');
}
}