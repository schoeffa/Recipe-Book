import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[]= [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
