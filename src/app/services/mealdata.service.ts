import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MealdataService {
  constructor(private http: HttpClient) {}
  getRandomMeal() {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/random.php');
  }

  getSearchedMeal(query) {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
  }

  getsingleMeal(query) {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
  }
}
