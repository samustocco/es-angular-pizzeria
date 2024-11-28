import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Pizza } from '../pizza/pizza.model';
import { DUMMY_PIZZE } from '../DUMMY_PIZZE';

@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css'
})
export class ListaPizzeComponent {

  // @Input({required: true}) arrayPizze!: Pizza[];
  arrayPizze = DUMMY_PIZZE;

  @Output() selectPizza = new EventEmitter<Pizza>();

  onPizzaClicked(pizza: Pizza) {
    this.selectPizza.emit(pizza);
  }
}
