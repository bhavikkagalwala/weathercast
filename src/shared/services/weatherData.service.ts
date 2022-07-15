import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { ApiRoute } from "../constant/api-route";

@Injectable({
  providedIn: "root",
})
export class WeatherDataService {
  constructor(private httpService: HttpService) {}

  getWeatherData(data: any) {
    return this.httpService.get(ApiRoute.weatherData, data);
  }

  getForCastWeatherData(data: any) {
    return this.httpService.get(ApiRoute.foreCastWeatherData, data);
  }
}
