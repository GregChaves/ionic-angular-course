import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'DontKnow',
      imageUrl: './assets/images/food1.png',
      ingredients: ['French Fries', 'Whatever', 'Whenever']
    },
    {
      id: 'r2',
      title: 'Iknow',
      imageUrl: './assets/images/food2.png',
      ingredients: ['Baked Potato', 'Black Rice', 'Beans', 'Ham']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
