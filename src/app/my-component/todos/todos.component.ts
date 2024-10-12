import { Component,OnInit } from '@angular/core';
// import { Todos } from './app/Todo';
import { CommonModule } from '@angular/common';
import { Todos } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
// enum aman {
//   Quiz = 'quiz'
// }
// import { Todos } from '../../Todo';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos:any;
  // aman1 = aman.Quiz;
  constructor(){
    this.todos=[
      {
        slno:3,
        name:"Title",
        dsc:"hello",
        active:true

      },
      {
        slno:4,
        name:"Bottle",
        dsc:"greeen",
        active:true

      }
    ]
  }
  ngOnInit(): void {
    
  }
  deletetodo(todo:Todos){
    console.log("Delete")
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1)

  }
  }

