import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputRef', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInputRef', {static: false}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addItem() {
    const newIngredient = new Ingredient( this.nameInput.nativeElement.value,this.amountInput.nativeElement.value)
    this.shoppingListService.addIngredient(newIngredient);
  }

}
