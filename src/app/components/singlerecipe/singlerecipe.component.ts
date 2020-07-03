import { Component, OnInit } from '@angular/core';
import { MealdataService } from '../../services/mealdata.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singlerecipe',
  templateUrl: './singlerecipe.component.html',
  styleUrls: ['./singlerecipe.component.css'],
})
export class SinglerecipeComponent implements OnInit {
  meal: any = [];
  ready = false;
  constructor(
    private mealService: MealdataService,
    private route: ActivatedRoute,
    private locate: Location
  ) {}

  ngOnInit(): void {
    this.mealService
      .getsingleMeal(this.route.snapshot.params.text)
      .subscribe((data: any) => {
        this.meal = data.meals[0];
        this.ready = true;
        // console.log(this.meal);
      });
  }
  backClicked() {
    this.locate.back();
  }
}
