import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { MealdataService } from './services/mealdata.service';
import { HttpClientModule } from '@angular/common/http';
import { RandomRecipeComponent } from './components/random-recipe/random-recipe.component';
import { SinglerecipeComponent } from './components/singlerecipe/singlerecipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    RecipeComponent,
    RandomRecipeComponent,
    SinglerecipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [MealdataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
