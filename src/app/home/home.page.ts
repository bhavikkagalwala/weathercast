import { Component,ViewChild } from "@angular/core";
import { WeatherDataService } from "../../shared/services/weatherData.service";
import { CityListService } from "../../shared/services/cityList.services";
import { formatDate } from "@angular/common";
import {IonSearchbar} from '@ionic/angular';

import { Geolocation } from "@capacitor/geolocation";

import { Enums } from "../../shared/constant/enums";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage  {
  location: any;
  @ViewChild('mySearchbar', {static: false}) searchbar: IonSearchbar;
  constructor(
    private weatherData: WeatherDataService,
    private cityList: CityListService
  ) {}
  apiKey = Enums.apiKey;
  cityApiKey = Enums.cityApiKey;
  globalVariable = Enums;
  allCityList: boolean = false;
  cityTemprature: number;
  citypressure: number;
  cityHumidity: number;
  currentCountryName: string;
  currentCityName: string;
  cityName: string;
  allCityResult: [];
  countryName: string;
  todaysDate = formatDate(new Date(), "EEEE, d MMMM", "en-US");
  foreCastDateOne: any;
  foreCastDateTwo: any;
  foreCastDateThree: any;
  foreCastTempOne: number;
  foreCastTempTwo: number;
  foreCastTempThree: number;
  iconSrcUrl: any;
  loaded = false;
  coords: any;

  ngOnInit() {
    this.getCurrentCityWeatherByGeoLocation();
  }

  ionViewWillEnter() {
    setInterval(() => {
      this.loaded = true;
    }, Enums.loaderTime);
 
  }

  async getCurrentCityWeatherByGeoLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.getLangLongResposne(
        coordinates.coords.latitude,
        coordinates.coords.longitude
      );
    } catch (e) {
      console.log(e);
    }
  }

 
  getCityData(data: any) {
    this.cityTemprature = Math.floor(data.main.temp);
    this.citypressure = data.main.pressure;
    this.cityHumidity = data.main.humidity;
    this.currentCityName = data.name;
    this.currentCountryName = data.sys.country;
  }

  getLangLongResposne(Latitude: number, Longitude: number) {
    let obj = {
      params: {
        lat: Latitude,
        lon: Longitude,
        appid: this.apiKey,
        units: Enums.metric,
      },
    };
    this.weatherData.getWeatherData(obj).subscribe((res: any) => {
      this.getCityData(res);
      this.getIconUrl(res);
    });
    this.weatherData.getForCastWeatherData(obj).subscribe((res: any) => {
      this.getForecastWeatherData(res);
    });
  }

  getWeatherWithCityName(cityName: any) {
    this.allCityList = false;
    this.resetSearchBar()
    let obj = {
      params: {
        q: cityName.LocalizedName,
        units: Enums.metric,
        appid: this.apiKey,
      },
    };
    this.weatherData.getWeatherData(obj).subscribe((result: any) => {
      this.getCityData(result);
      this.getIconUrl(result);
    });
    this.weatherData.getForCastWeatherData(obj).subscribe((res: any) => {
      this.getForecastWeatherData(res);
    });
  }

  getAllCityList($event: any) {
    this.allCityList = true;
    let obj = {
      params: {
        apikey: this.cityApiKey,
        q: $event.detail.value,
      },
    };
    this.cityList.getAllCityList(obj).subscribe((response: any) => {
      this.allCityResult = response;
    });
  }

  getForecastWeatherData(foreCastResult: any) {
    this.foreCastDateOne = formatDate(
      foreCastResult.list[3].dt_txt,
      "EEEE",
      "en-us"
    );
    this.foreCastTempOne = Math.floor(foreCastResult.list[3].main.temp);
    this.foreCastDateTwo = formatDate(
      foreCastResult.list[11].dt_txt,
      "EEEE",
      "en-us"
    );
    this.foreCastTempTwo = Math.floor(foreCastResult.list[11].main.temp);
    this.foreCastDateThree = formatDate(
      foreCastResult.list[19].dt_txt,
      "EEEE",
      "en-us"
    );
    this.foreCastTempThree = Math.floor(foreCastResult.list[19].main.temp);
  }

  getIconUrl(weatherData: any) {
    let iconName = weatherData.weather[0].icon + ".png";
    this.iconSrcUrl = Enums.iconUrl + iconName;
  }

  resetSearchBar() {
    this.searchbar.value = null;
  }
}
