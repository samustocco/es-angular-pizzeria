import { Component} from '@angular/core';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';
import { PizzaComponent } from './pizza/pizza.component';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent, PizzaComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})
export class PizzeriaComponent {
  
}
