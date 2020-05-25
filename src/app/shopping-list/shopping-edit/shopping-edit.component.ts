import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputRef', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInputRef', {static: false}) amountInput: ElementRef;
  @Output() addListItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    const newIngredient = new Ingredient( this.nameInput.nativeElement.value,this.amountInput.nativeElement.value)
    this.addListItem.emit(newIngredient);
  }

}
