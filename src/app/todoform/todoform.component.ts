import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todoform',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {

  todoInput=""
  constructor(private ts:TodoService){}
  addTask(){
    if(this.todoInput.trim()!=""){
      this.ts.addTodo(this.todoInput);
      this.todoInput="";

    }

  }
  resetForm(){
    this.todoInput="";

  }

}
