import { Component, Input } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route = 'default';

  handleRouter(routerData: {route: string}) {
    this.route = routerData.route;
  }
}
