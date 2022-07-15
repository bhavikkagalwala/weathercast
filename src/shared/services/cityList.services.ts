import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { ApiRoute } from "../constant/api-route";

@Injectable({
  providedIn: "root",
})
export class CityListService {
  constructor(private httpService: HttpService) {}

    getAllCityList(data: any) {
        return this.httpService.getCityList(ApiRoute.allCityList, data);
  }
}
