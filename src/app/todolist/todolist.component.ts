import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent  implements OnInit{

  constructor(private ts:TodoService){
  }

  todos:any;

  ngOnInit():void{
    this.todos =this.ts.TodoList;
  }
  removeTodo(index:number){
    this.ts.deleteTodo(index)
  }

}
