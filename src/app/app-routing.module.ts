import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RandomRecipeComponent } from './components/random-recipe/random-recipe.component';
import { SinglerecipeComponent } from './components/singlerecipe/singlerecipe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'recipe/:text',
    component: RecipeComponent,
  },
  {
    path: 'search/:text',
    component: SinglerecipeComponent,
  },
  {
    path: 'random-recipe',
    component: RandomRecipeComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
