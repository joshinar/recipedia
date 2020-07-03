import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealdataService } from '../../services/mealdata.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  meals: any = [];
  isDataFetched = false;
  constructor(
    private mealService: MealdataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): any {
    this.mealService
      .getSearchedMeal(this.route.snapshot.params.text)
      .subscribe((data: any) => {
        this.meals = data.meals;
        this.isDataFetched = true;
      });
  }
}
