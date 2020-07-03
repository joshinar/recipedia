import { Component, OnInit } from '@angular/core';
import { MealdataService } from '../../services/mealdata.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.css'],
})
export class RandomRecipeComponent implements OnInit {
  meal: any = [];
  ready = false;
  constructor(private mealService: MealdataService, private locate: Location) {}

  ngOnInit(): void {
    this.mealService.getRandomMeal().subscribe((data: any) => {
      this.meal = data.meals[0];
      this.ready = true;
      // console.log(this.meal);
    });
  }
  backClicked() {
    this.locate.back();
  }
}
