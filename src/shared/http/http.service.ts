import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";



@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(serviceName: string, data: any) {
    return this.httpClient.get(environment.apiUrl + serviceName, data);
  }

  getCityList(serviceName: string, data: any) {
   
    return this.httpClient.get(environment.cityListApi + serviceName, data);
  }
}
