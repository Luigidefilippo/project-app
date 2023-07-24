import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe ' , 'This is simply a test ' , 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwips.plug.it%2Fcips%2Fpaginegialle.it%2Fmagazine%2Fcms%2F2022%2F03%2Fcarne-pregiata.jpg%3Fw%3D744%26h%3D418%26a%3Dc&tbnid=5EBtRBJ9LCC2WM&vet=12ahUKEwiSqpa-5KeAAxV5hv0HHTkmBt0QMygBegUIARDoAQ..i&imgrefurl=https%3A%2F%2Fwww.paginegialle.it%2Fmagazine%2Ffood%2Fcarne-piu-pregiata-e-costosa-15481&docid=43AHr7KoojD1RM&w=744&h=418&q=carne&ved=2ahUKEwiSqpa-5KeAAxV5hv0HHTkmBt0QMygBegUIARDoAQ')
  ];

}
