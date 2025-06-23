import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

type ButtonType = 'increment' | 'decrement' | 'reset'

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  
  type = input<ButtonType>('increment');
  action = output<void>();
  
  get label(){
    switch (this.type()) {
      case 'increment': return '+';
      case 'decrement': return '–';
      case 'reset': return '⭯';
      default: return '?';
    }

  }
  
  get bgColor(){
    switch (this.type()) {
      case 'increment': return 'green';
      case 'decrement': return 'crimson';
      case 'reset': return 'gray';
      default: return 'black';
    }


  }

  handleClick(){
    this.action.emit()
  }

}
