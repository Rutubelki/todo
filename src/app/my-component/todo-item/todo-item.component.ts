import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
// import { Todos } from '../../Todo';
import { TodosComponent } from '../todos/todos.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  
  @Input() todo: any;
  @Output() tododelete:EventEmitter<Todos>=new EventEmitter();
  Onclick(todo:Todos){
    console.log("Onclick has been triggered")
    this.tododelete.emit(todo)
 }
}
export interface Todos{
  slno:number | undefined
  dsc:string | undefined
  name:string | undefined
  active:Boolean | undefined
}

