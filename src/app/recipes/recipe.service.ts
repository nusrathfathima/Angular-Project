import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
    'Healthy Salmon',
    'Salmon is good for health',
    'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F8000900-2000.jpg',
    [
      new Ingredient('Salmon Fish', 1),
      new Ingredient('Lemons', 3 )
    ]),
    new Recipe(
    'Double Cheese Chicken Burger',
    'A big fat burger for the worth of calories',
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Burger_King_Chicken_Burger_%2824387037511%29.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
];

constructor(private slService: ShoppingListService) {

}

getRecipes() {
  return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients);
}

}
