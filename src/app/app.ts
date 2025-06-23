import { Component, signal } from '@angular/core';
import { Card } from './components/card/card';
import { Button } from './components/button/button';

@Component({
  selector: 'app-root',
  imports: [Button, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Simple Counter';
  
  count = signal(0)

  increment(){
    this.count.update(value => value + 1)
  }

  decrement(){
    this.count.update(value => value - 1)
  }

  reset(){
    this.count.set(0)
  }
}
